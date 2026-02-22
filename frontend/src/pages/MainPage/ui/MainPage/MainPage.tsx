import type { FC } from "react"

import { hooksVirtualScroll } from "@shared/hooks"

import * as Styled from "./MainPage.styled"

import { AboutMeBlock, VideoBlog } from "@features/index"
import { WelcomeSection, ProjectsShort, PlanDesignWork, SectionTextMe } from "@entities/index"
import { BrashDrawing } from "@shared/ui"

const MainPage: FC = () => {
  hooksVirtualScroll.useScrollTop({})

  return (
    <Styled.Wrap>
      <WelcomeSection />
      <BrashDrawing />
      <ProjectsShort />
      <AboutMeBlock />
      <PlanDesignWork />
      <VideoBlog />
      <SectionTextMe />
    </Styled.Wrap>
  )
}

export default MainPage
