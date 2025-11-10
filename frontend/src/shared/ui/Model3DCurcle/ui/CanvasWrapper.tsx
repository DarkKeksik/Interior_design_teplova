import type { FC } from "react"

import { useState, Suspense } from "react"

import { useStore, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { GLTF } from "three/addons/loaders/GLTFLoader.js"

type TCanvasWrapper = {
  gltf: GLTF
  isUserInteracting: boolean
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

export const CanvasWrapper: FC<TCanvasWrapper> = ({ isUserInteracting, gltf }) => {
  const [rotationVector3, setRotationVector3] = useState<[number, number, number]>([0, 0, 0])

  const { getState } = useStore()
  const { camera } = getState()
  camera.position.set(...rotationConfig.defaultCameraPositionVector3)

  const changeRotationCamera = () => {
    setRotationVector3((prev) => {
      let [positionXCamera, positionYCamera, positionZCamera] = prev
      let newPositionY =
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
    <Suspense fallback={null}>
      <primitive object={gltf.scene} scale={0.5} rotation={rotationVector3} />
      <OrbitControls />
    </Suspense>
  )
}
