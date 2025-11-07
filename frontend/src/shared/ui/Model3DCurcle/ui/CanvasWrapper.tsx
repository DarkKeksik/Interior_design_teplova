import type { FC } from "react"

import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import { GLTF } from "three/addons/loaders/GLTFLoader.js"
import { useStore } from "@react-three/fiber"

type TCanvasWrapper = {
  gltf: GLTF
}
export const CanvasWrapper: FC<TCanvasWrapper> = ({ gltf }) => {
  const state = useStore()

  state.getState().camera.position.set(0, 6, 1)

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} scale={0.5} />
      <OrbitControls />
    </Suspense>
  )
}
