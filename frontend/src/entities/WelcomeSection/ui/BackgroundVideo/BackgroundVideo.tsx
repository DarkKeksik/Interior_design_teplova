import type { FC } from "react"

import * as Styled from "./BackgroundVideo.styled"

import { DASHVideoBlock } from "@shared/ui"

const BackgroundVideo: FC = () => {
  return (
    <Styled.Wrap>
      <Styled.BGVideo as={DASHVideoBlock} autoPlay loop />
    </Styled.Wrap>
  )
}

export default BackgroundVideo
