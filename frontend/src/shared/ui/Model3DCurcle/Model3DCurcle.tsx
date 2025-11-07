import type { FC } from "react"

import { useLoader, Canvas } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

import * as Styled from "./Model3DCurcle.styled"
import { CanvasWrapper } from "@shared/ui/Model3DCurcle/ui/CanvasWrapper"

type TModel3DCurcle = {
  srcModel?: string
}

const Model3DCurcle: FC<TModel3DCurcle> = ({
  srcModel = "models/appart_type_1_1/appart_type_1_1.glb",
}) => {
  const gltf = useLoader(GLTFLoader, srcModel)

  return (
    <Styled.WrapRound>
      <Styled.Round>
        <Canvas>
          <CanvasWrapper gltf={gltf} />
        </Canvas>
      </Styled.Round>
      <Styled.Shadow />
    </Styled.WrapRound>
  )
}

export default Model3DCurcle
