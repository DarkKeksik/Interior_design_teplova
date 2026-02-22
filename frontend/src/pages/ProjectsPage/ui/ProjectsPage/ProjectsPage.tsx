import type { FC } from "react"

import { ProjectsList } from "@entities/index"
import { hooksVirtualScroll } from "@shared/hooks"
import { Headline } from "@shared/ui"

import * as Styled from "./ProjectsPage.styled"

const ProjectsPage: FC = () => {
  hooksVirtualScroll.useScrollTop({})

  return (
    <Styled.Wrap>
      <Headline>Все проекты</Headline>
      <ProjectsList />
    </Styled.Wrap>
  )
}

export default ProjectsPage
