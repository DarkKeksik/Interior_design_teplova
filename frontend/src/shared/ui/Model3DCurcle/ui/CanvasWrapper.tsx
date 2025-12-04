import type { FC } from "react"

import { useState } from "react"

import { useStore, useFrame, useLoader } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

type TCanvasWrapper = {
  isUserInteracting: boolean
  srcModel: string
}

type TRotationConfig = {
  defaultCameraPositionVector3: [number, number, number]
  speedCameraRotationY: number
  fullTurnY: number
}

const rotationConfig: TRotationConfig = {
  defaultCameraPositionVector3: [1, 4, -4],
  speedCameraRotationY: 0.002,
  fullTurnY: 6.27,
}

export const CanvasWrapper: FC<TCanvasWrapper> = ({ isUserInteracting, srcModel }) => {
  const [rotationVector3, setRotationVector3] = useState([0, 0, 0])
  const { scene } = useLoader(GLTFLoader, srcModel)
  const { getState } = useStore()
  const { camera } = getState()

  camera.position.set(...rotationConfig.defaultCameraPositionVector3)

  const changeRotationCamera = () => {
    setRotationVector3((prev) => {
      const [positionXCamera, positionYCamera, positionZCamera] = prev
      const newPositionY =
        positionYCamera >= rotationConfig.fullTurnY
          ? 0
          : positionYCamera + rotationConfig.speedCameraRotationY

      return [positionXCamera, newPositionY, positionZCamera]
    })
  }

  useFrame(() => {
    if (!isUserInteracting) {
      changeRotationCamera()
    }
  })

  return (
    <>
      <primitive object={scene} scale={0.5} rotation={rotationVector3} />
      <OrbitControls />
    </>
  )
}
