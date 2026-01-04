import type { FC } from "react"
import { useLayoutEffect } from "react"
import { useParams } from "react-router-dom"
import qs from "qs"

import type { TProjectsInfo } from "@shared/api"
import { Headline, SectionBlack, Preloader } from "@shared/ui"
import { hooksData } from "@shared/hooks"

import { Gallery, ProjectInformation } from "../"
import * as Styled from "./ProjectPage.styled"

const ProjectPage: FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

  const { slug } = useParams()
  const query = qs.stringify(
    {
      populate: {
        images: {
          fields: ["formats"],
        },
      },
      filters: {
        slug: { $eq: slug },
      },
    },
    { encodeValuesOnly: true }
  )

  const { dataBackend, isLoading } = hooksData.useAxios<TProjectsInfo>({
    url: `/projects?${query}`,
  })

  if (isLoading) {
    return (
      <Styled.Wrap>
        <Preloader />
      </Styled.Wrap>
    )
  }

  return (
    <Styled.Wrap>
      <Headline size="m">Проект "{dataBackend?.data[0]?.title}"</Headline>
      <SectionBlack isPadding={false}>
        <Styled.WrapContent>
          <Styled.LeftBlock>
            <Gallery images={dataBackend?.data[0]?.images as any} />
          </Styled.LeftBlock>

          <Styled.RightBlock>
            <ProjectInformation {...(dataBackend?.data[0] as any)} />
            {/* <Map />
            <Reviews /> */}
          </Styled.RightBlock>
        </Styled.WrapContent>
      </SectionBlack>
    </Styled.Wrap>
  )
}

export default ProjectPage
