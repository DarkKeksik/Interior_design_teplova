import type { FC } from "react"

import * as Styled from "./MainPage.styled"

import { WelcomeSection, GallerySection } from "@entities/index"
import { BrashDrawing } from "@shared/ui"

const MainPage: FC = () => {
  return (
    <Styled.Wrap>
      <WelcomeSection />
      <BrashDrawing />
      <GallerySection />
    </Styled.Wrap>
  )
}

export default MainPage
