import type { FC } from "react"

import * as Styled from "./MainPage.styled"

import { AboutMeBlock } from "@features/index"
import { WelcomeSection, GallerySection } from "@entities/index"
import { BrashDrawing } from "@shared/ui"

const MainPage: FC = () => {
  return (
    <Styled.Wrap>
      <WelcomeSection />
      <BrashDrawing />
      <GallerySection />
      <AboutMeBlock />
    </Styled.Wrap>
  )
}

export default MainPage
