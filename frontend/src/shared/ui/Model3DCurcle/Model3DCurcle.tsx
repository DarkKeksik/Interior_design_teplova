import type { FC } from "react"

import { useRef, useState } from "react"

import { useLoader, Canvas } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"

import { CanvasWrapper } from "@shared/ui/Model3DCurcle/ui/CanvasWrapper"

import * as Styled from "./Model3DCurcle.styled"

type TModel3DCurcle = {
  srcModel?: string
}

const Model3DCurcle: FC<TModel3DCurcle> = ({
  srcModel = "models/appart_type_1_1/appart_type_1_1.glb",
}) => {
  const gltf = useLoader(GLTFLoader, srcModel)
  const [isUserInteracting, setIsUserInteracting] = useState(false)

  return (
    <Styled.WrapRound>
      <Styled.Round
        onMouseOver={() => setIsUserInteracting(true)}
        onMouseOut={() => setIsUserInteracting(false)}
      >
        <Canvas>
          <CanvasWrapper isUserInteracting={isUserInteracting} gltf={gltf} />
        </Canvas>
      </Styled.Round>
      <Styled.Shadow />
    </Styled.WrapRound>
  )
}

export default Model3DCurcle
