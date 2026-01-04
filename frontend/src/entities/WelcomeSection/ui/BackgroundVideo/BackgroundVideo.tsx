import type { FC } from "react"

import * as Styled from "./BackgroundVideo.styled"

import { DASHVideoBlock } from "@shared/ui"

const BackgroundVideo: FC = () => {
  return (
    <Styled.Wrap>
      <DASHVideoBlock autoPlay loop controls={false} />
    </Styled.Wrap>
  )
}

export default BackgroundVideo
