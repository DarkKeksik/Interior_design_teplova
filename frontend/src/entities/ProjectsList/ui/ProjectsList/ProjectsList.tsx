import type { FC } from "react"
import qs from "qs"

import type { TProjectsInfo } from "@shared/api"
import { hooksData } from "@shared/hooks"
import { SectionBlack, Preloader } from "@shared/ui"

import { ProjectItem } from "../"
import * as Styled from "./Projects.styled"

const ProjectsList: FC = () => {
  const urlProjects = qs.stringify(
    {
      populate: {
        images: {
          fields: ["formats"],
        },
      },
      sort: ["completionYear:desc"],
    },
    { encodeValuesOnly: true }
  )

  const { dataBackend, isLoading = true } = hooksData.useAxios<TProjectsInfo>({
    url: `/projects?${urlProjects}`,
  })

  if (isLoading) {
    return (
      <SectionBlack typeBg="black" isPadding={false}>
        <Preloader />
      </SectionBlack>
    )
  }

  return (
    <SectionBlack typeBg="black" isPadding={false}>
      <Styled.ProjectsList>
        {dataBackend?.data.map((dataProject, id) => (
          <ProjectItem {...dataProject} key={id} />
        ))}
      </Styled.ProjectsList>
    </SectionBlack>
  )
}

export default ProjectsList
