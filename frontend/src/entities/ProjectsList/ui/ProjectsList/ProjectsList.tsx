import type { FC } from "react"

import { SectionBlack } from "@shared/ui"

import { data_projects } from "../../"
import { ProjectItem } from "../"
import * as Styled from "./Projects.styled"

const ProjectsList: FC = () => {
  return (
    <SectionBlack typeBg="black" isPadding={false}>
      <Styled.ProjectsList>
        {data_projects.map(({ title, description, images }) => (
          <ProjectItem title={title} description={description} images={images} />
        ))}
      </Styled.ProjectsList>
    </SectionBlack>
  )
}

export default ProjectsList
