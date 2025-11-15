import type { FC } from "react"

import * as Styled from "./MainPage.styled"

import { AboutMeBlock } from "@features/index"
import { GalleryShortSection, WelcomeSection } from "@entities/index"
import { BrashDrawing, Chart_gantt } from "@shared/ui"

const MainPage: FC = () => {
  return (
    <Styled.Wrap>
      <WelcomeSection />
      <BrashDrawing />
      <GalleryShortSection />
      <AboutMeBlock />
      <Chart_gantt />
    </Styled.Wrap>
  )
}

export default MainPage
