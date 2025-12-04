import type { FC } from "react"

import * as Styled from "./GalleryPage.styled"

import { VideoBlog } from "@features/index"
import { Headline } from "@shared/ui"

const GalleryPage: FC = () => {
  return (
    <Styled.Wrap>
      <Headline>Галерея работ</Headline>
      <VideoBlog isShortGallery={false} isTitle={false} />
    </Styled.Wrap>
  )
}

export default GalleryPage
