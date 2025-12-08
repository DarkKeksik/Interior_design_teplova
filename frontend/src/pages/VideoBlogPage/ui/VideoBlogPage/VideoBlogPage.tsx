import type { FC } from "react"

import { useLayoutEffect } from "react"

import { VideoBlogPlayer } from "@entities/index"
import { Headline } from "@shared/ui"
import { linksPages } from "@shared/config"

import * as Styled from "./VideoBlogPage.styled"

const VideoBlogPage: FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <Styled.Wrap>
      <Headline>{linksPages.page_vblog.link_name}</Headline>
      <Styled.VideoBlogPlayer as={VideoBlogPlayer} />
    </Styled.Wrap>
  )
}

export default VideoBlogPage
