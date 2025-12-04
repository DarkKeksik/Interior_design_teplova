import type { FC } from "react"

import IconPlayVideo from "../../assets/icon_video.svg?react"
import IconYoutube from "../../assets/icon_youtube.svg?react"

import * as Styled from "./VideoItem.styled"

type TExtraLinks = {
  linkYoutube: string
  linkInstagramm: string
}

type TVideoItem = {
  sourcePreview: string
  sourceVideo?: string
  extraLinks?: TExtraLinks
  onClick: () => void
}

const VideoItem: FC<TVideoItem> = ({ sourcePreview, sourceVideo, extraLinks, onClick }) => {
  const { linkYoutube = "https://www.youtube.com/watch?v=VQbIIDaBNMY" } = extraLinks || {}

  return (
    <Styled.Wrap>
      <Styled.VideoPreview>
        <Styled.VideoPlayBlock onClick={onClick}>
          <IconPlayVideo width={70} hight={70} fill="#fffff0" />
        </Styled.VideoPlayBlock>

        <Styled.VideoServices>
          <Styled.LinkVideoService target="_blank" href={linkYoutube}>
            <Styled.IconLink as={IconYoutube} width="2rem" height="2rem" fill="#ff0033" />
          </Styled.LinkVideoService>
        </Styled.VideoServices>

        <img src={sourcePreview} />
      </Styled.VideoPreview>
    </Styled.Wrap>
  )
}

export default VideoItem
