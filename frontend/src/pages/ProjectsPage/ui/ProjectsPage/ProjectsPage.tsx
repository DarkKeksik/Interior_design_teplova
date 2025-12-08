import type { FC } from "react"

import { useLayoutEffect } from "react"

import { ProjectsList } from "@entities/index"
import { Headline } from "@shared/ui"

import * as Styled from "./ProjectsPage.styled"

const ProjectsPage: FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <Styled.Wrap>
      <Headline>Все проекты</Headline>
      <ProjectsList />
    </Styled.Wrap>
  )
}

export default ProjectsPage
