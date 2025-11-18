import type { FC } from "react"

import * as Styled from "./MainPage.styled"

import { AboutMeBlock } from "@features/index"
import { WelcomeSection, GalleryShortSection, PlanDesignWork } from "@entities/index"
import { BrashDrawing } from "@shared/ui"

const MainPage: FC = () => {
  return (
    <Styled.Wrap>
      <WelcomeSection />
      <BrashDrawing />
      <GalleryShortSection />
      <AboutMeBlock />
      <PlanDesignWork />
    </Styled.Wrap>
  )
}

export default MainPage
