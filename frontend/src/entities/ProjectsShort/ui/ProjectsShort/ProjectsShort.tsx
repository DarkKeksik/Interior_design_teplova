import type { FC } from "react"

import { Link } from "react-router-dom"

import type { TProjectsInfo } from "@shared/api"
import { hooksData } from "@shared/hooks"
import { SectionBlack, TitleSection } from "@shared/ui"
import { linksPages, env } from "@shared/config"

import { ProjectDescription } from "../index.ts"
import * as Styled from "./ProjectsShort.styled.ts"

const ProjectsShort: FC = () => {
  const { dataBackend, isLoading } = hooksData.useAxios<TProjectsInfo>({
    url: "/projects?populate=images&pagination[pageSize]=4&sort=completionYear:desc",
  })

  return (
    <SectionBlack isPadding={false} typeBg="blackExtra">
      <Styled.TitleSection as={TitleSection}>Проекты</Styled.TitleSection>
      <Styled.Container>
        <Styled.Content>
          {dataBackend?.data.map(({ images, ...projectInfo }, id) => (
            <Styled.Project
              isVisibleDescription={id < 1}
              key={id}
              source={`${env.BACKEND_URL}${images?.[0]?.formats?.large?.url ?? ""}`}
            >
              <ProjectDescription
                isLoading={isLoading}
                {...projectInfo}
                isDescription={id < 2 ? true : false}
              />
            </Styled.Project>
          ))}

          <Styled.WrapButtonGallery>
            <Styled.ButtonGallery as={Link} to={linksPages.page_projects.link}>
              Больше <br /> проектов
            </Styled.ButtonGallery>
          </Styled.WrapButtonGallery>
        </Styled.Content>
      </Styled.Container>
    </SectionBlack>
  )
}

export default ProjectsShort
