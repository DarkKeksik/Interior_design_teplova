import type { FC } from "react"

import { DASHVideoBlock } from "@shared/ui"

import IconPlayVideo from "../../assets/icon_video.svg?react"
import * as Styled from "./VideoBlogPlayer.styled"

type TVideoBlogPlayer = {
  activeVideoId?: number | null
  isShort?: boolean
}

const previews = [
  "./img/gallery_main.jpg",
  "./img/1.5-small-gallery.jpg",
  "./img/2x-small-gallery.jpg",
  "./img/2.5x-small-gallery.jfif",
  "./img/gallery_main.jpg",
]

const VideoBlogPlayer: FC<TVideoBlogPlayer> = ({ isShort = false, ...props }) => {
  return (
    <Styled.Wrap {...props}>
      <Styled.Content>
        <Styled.WrapVideoBlock>
          <Styled.VideoBlock as={DASHVideoBlock} controls />
        </Styled.WrapVideoBlock>
        <Styled.Information>
          <Styled.Header>
            <Styled.Title>Светлая кухня в ЖК сахарный ключ</Styled.Title>
            <Styled.PublishDataTime>02.12.25 | 17:57</Styled.PublishDataTime>
          </Styled.Header>
          <Styled.Description>
            Вся сантехника подобранна dom apex, керамогранит стена, пол - PAMESA MANAOS DARK
            600x1200mm кастомная раковина с щелевым изливом XLight XTone Urbatek, aged dark nature
            1020x2500mm.
          </Styled.Description>
        </Styled.Information>
      </Styled.Content>

      <Styled.ListVideos isShort={isShort}>
        {previews.map((item, id) => (
          <Styled.WrapPreview key={id}>
            <Styled.BackgroundButtonPlay>
              <IconPlayVideo width="3rem" height="3rem" />
            </Styled.BackgroundButtonPlay>
            <Styled.Preview src={item} />
            <Styled.TitlePreview>Светлая кухня в ЖК сахарный ключ</Styled.TitlePreview>
          </Styled.WrapPreview>
        ))}
      </Styled.ListVideos>
    </Styled.Wrap>
  )
}

export default VideoBlogPlayer
