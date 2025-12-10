import type { FC } from "react"
import { useLayoutEffect } from "react"

import { Headline, SectionBlack } from "@shared/ui"

import { Gallery, Reviews, Map, ProjectInformation } from "../"
import * as Styled from "./ProjectPage.styled"

const ProjectPage: FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <Styled.Wrap>
      <Headline>Светлая кухня в ЖК сахарный ключ</Headline>
      <SectionBlack isPadding={false}>
        <Styled.WrapContent>
          <Styled.LeftBlock>
            <Gallery />
          </Styled.LeftBlock>

          <Styled.RightBlock>
            <ProjectInformation />
            <Map />
            <Reviews />
          </Styled.RightBlock>
        </Styled.WrapContent>
      </SectionBlack>
    </Styled.Wrap>
  )
}

export default ProjectPage
