import type { FC } from "react"

import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"

import { Preloader } from "@shared/ui"

import { CanvasWrapper } from "./ui/CanvasWrapper"
import * as Styled from "./Model3DCurcle.styled"

type TModel3DCurcle = {
  srcModel?: string
}

const Model3DCurcle: FC<TModel3DCurcle> = ({
  srcModel = "models/appart_type_1_1/appart_type_1_1.glb",
}) => {
  const [isUserInteracting, setIsUserInteracting] = useState(false)

  return (
    <Styled.WrapRound>
      <Styled.Round
        onMouseOver={() => setIsUserInteracting(true)}
        onMouseOut={() => setIsUserInteracting(false)}
      >
        <Suspense fallback={<Preloader size="l" />}>
          <Canvas>
            <CanvasWrapper isUserInteracting={isUserInteracting} srcModel={srcModel} />
          </Canvas>
        </Suspense>
      </Styled.Round>
      <Styled.Shadow />
    </Styled.WrapRound>
  )
}

export default Model3DCurcle
