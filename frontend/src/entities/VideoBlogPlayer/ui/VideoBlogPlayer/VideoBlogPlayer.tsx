import type { FC } from "react"
import { useMemo } from "react"
import qs from "qs"

import { DASHVideoBlock, Preloader } from "@shared/ui"
import { hooksData } from "@shared/hooks"

import { VideoPreviews } from "../"
import * as Styled from "./VideoBlogPlayer.styled"

type TVideoBlogPlayer = {
  isShort?: boolean
  idVideo?: string
}

const VideoBlogPlayer: FC<TVideoBlogPlayer> = ({ idVideo, isShort = false, ...props }) => {
  const queryStringCurrentVideo = useMemo(() => {
    return qs.stringify({ populate: ["preview", "video"] }, { encodeValuesOnly: true })
  }, [])

  const { dataBackend: dataBackendVideoCurrent, isLoading: isLoadingVideoCurrent } =
    hooksData.useAxios({
      url: `/videos/${idVideo}?${queryStringCurrentVideo}`,
      dependencies: [idVideo],
    })

  const { data } = dataBackendVideoCurrent || {}
  const { preview, name, description, createdAt } = data || {}
  const { formats } = preview || {}
  const { medium } = formats || {}
  const { url: previewVideoCurrent } = medium || {}

  return (
    <Styled.Wrap {...props}>
      <Styled.Content>
        <Styled.WrapVideoBlock>
          <Styled.VideoBlock as={DASHVideoBlock} controls previewImg={previewVideoCurrent} />
        </Styled.WrapVideoBlock>

        <Styled.Information>
          {isLoadingVideoCurrent ? (
            <Preloader />
          ) : (
            <>
              <Styled.Header>
                <Styled.Title>{name}</Styled.Title>
                <Styled.PublishDataTime>{createdAt}</Styled.PublishDataTime>
              </Styled.Header>
              <Styled.Description>{description}</Styled.Description>
            </>
          )}
        </Styled.Information>
      </Styled.Content>
      <VideoPreviews isShort={isShort} idCurrentVideo={idVideo} />
    </Styled.Wrap>
  )
}

export default VideoBlogPlayer
