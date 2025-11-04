import type { FC } from "react"

import * as Styled from "./MainPage.styled"

import { WelcomeSection, GalleryWorksShort } from "@entities/index"
import { BrashDrawing } from "@shared/ui"

const MainPage: FC = () => {
  return (
    <Styled.Wrap>
      <WelcomeSection />
      <BrashDrawing />
      <GalleryWorksShort />
    </Styled.Wrap>
  )
}

export default MainPage
