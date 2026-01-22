import type { FC } from "react"
import { Link } from "react-router-dom"

import IconPlayVideo from "../../assets/icon_video.svg?react"

import * as Styled from "./VideoPreview.styled"

type TVideoPreview = {
  previewUrl: string
  name: string
  linkToPage: string
}

const VideoPreview: FC<TVideoPreview> = ({ previewUrl, name, linkToPage }) => {
  return (
    <Link to={linkToPage}>
      <Styled.WrapPreview>
        <Styled.BackgroundButtonPlay>
          <IconPlayVideo width="3rem" height="3rem" />
        </Styled.BackgroundButtonPlay>
        <Styled.Preview src={previewUrl} />
        <Styled.TitlePreview>{name}</Styled.TitlePreview>
      </Styled.WrapPreview>
    </Link>
  )
}

export default VideoPreview
