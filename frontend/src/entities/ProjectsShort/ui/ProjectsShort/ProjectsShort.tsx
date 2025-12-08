import type { FC } from "react"

import { Link } from "react-router-dom"

import { SectionBlack } from "@shared/ui"
import { linksPages } from "@shared/config"

import { ProjectDescription } from "../index.ts"
import * as Styled from "./ProjectsShort.styled.ts"

const ProjectsShort: FC = () => {
  return (
    <SectionBlack isPadding={false} typeBg="blackExtra">
      <Styled.Container>
        <Styled.Content>
          <Styled.AArea>
            <ProjectDescription />
          </Styled.AArea>

          <Styled.BArea>
            <ProjectDescription />
          </Styled.BArea>

          <Styled.CArea>
            <ProjectDescription isDescription={false} />
          </Styled.CArea>

          <Styled.DArea>
            <ProjectDescription isDescription={false} />
          </Styled.DArea>

          <Styled.EArea>
            <Styled.ButtonGallery as={Link} to={linksPages.page_projects.link}>
              Больше <br /> проектов
            </Styled.ButtonGallery>
          </Styled.EArea>
        </Styled.Content>
      </Styled.Container>
    </SectionBlack>
  )
}

export default ProjectsShort
