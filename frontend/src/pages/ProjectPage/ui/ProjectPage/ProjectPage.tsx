import type { FC } from "react"

import { Headline, SectionBlack } from "@shared/ui"

import * as Styled from "./ProjectPage.styled"

const ProjectPage: FC = () => {
  return (
    <Styled.Wrap>
      <Headline>Проект</Headline>
      <SectionBlack></SectionBlack>
    </Styled.Wrap>
  )
}

export default ProjectPage
