import type { FC } from "react"

import { useLayoutEffect } from "react"

import * as Styled from "./MainPage.styled"

import { AboutMeBlock, VideoBlog } from "@features/index"
import { WelcomeSection, ProjectsShort, PlanDesignWork, SectionTextMe } from "@entities/index"
import { BrashDrawing } from "@shared/ui"

const MainPage: FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

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
