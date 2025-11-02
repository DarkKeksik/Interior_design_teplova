import type { FC } from "react"
import { Suspense } from "react"

import { Environment, OrbitControls } from "@react-three/drei"
import { useLoader, Canvas } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

import * as Styled from "./Model3DCurcle.styled"

type TModel3DCurcle = {
  src_model?: string
}

const Model3DCurcle: FC<TModel3DCurcle> = ({
  src_model = "models/appart_type_1_1/appart_type_1_1.glb",
}) => {
  const gltf = useLoader(GLTFLoader, src_model)

  return (
    <Styled.WrapRound>
      <Styled.Round>
        <Canvas>
          <Suspense fallback={null}>
            <primitive object={gltf.scene} scale={0.5} />
            <OrbitControls />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </Styled.Round>
      <Styled.Shadow />
    </Styled.WrapRound>
  )
}

export default Model3DCurcle
