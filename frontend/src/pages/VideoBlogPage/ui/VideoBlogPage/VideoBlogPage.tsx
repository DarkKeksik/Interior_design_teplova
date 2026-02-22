import type { FC } from "react"
import { useParams } from "react-router-dom"
import qs from "qs"

import { VideoBlogPlayer } from "@entities/index"
import { Headline } from "@shared/ui"
import { linksPages } from "@shared/config"
import { hooksData } from "@shared/hooks"
import { hooksVirtualScroll } from "@shared/hooks"

import * as Styled from "./VideoBlogPage.styled"

const VideoBlogPage: FC = () => {
  hooksVirtualScroll.useScrollTop({})

  const { slug } = useParams()

  const queryStringVideos = qs.stringify(
    {
      populate: ["video"],
      filters: {
        slug: {
          $eq: slug,
        },
      },
    },
    { encodeValuesOnly: true }
  )

  const { dataBackend } = hooksData.useAxios({ url: `/videos?${queryStringVideos}` })
  const { data } = dataBackend || {}
  const { documentId } = data?.[0] || {}

  return (
    <Styled.Wrap>
      <Headline>{linksPages.page_vblog.link_name}</Headline>
      <Styled.VideoBlogPlayer as={VideoBlogPlayer} idVideo={documentId} />
    </Styled.Wrap>
  )
}

export default VideoBlogPage
