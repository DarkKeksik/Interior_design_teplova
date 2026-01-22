import type { FC } from "react"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import qs from "qs"

import { hooksData } from "@shared/hooks"
import { Button, Gallery, Preloader } from "@shared/ui"
import { linksPages, env } from "@shared/config"

import * as Styled from "./VideoBlock.styled"
import { VideoItem } from "../"

type TOnClickVideoItem = {
  id: string | number
  onClick: React.Dispatch<React.SetStateAction<boolean>>
}

type TDataVideos = {
  data: {
    documentId: string
    description: string
    preview: {
      formats: {
        medium: {
          url: string
        }
      }
    }
    video: { [keys: string]: any }
  }[]
}

type TVideoBlock = {
  isShortGallery?: boolean
  setVideoId: React.Dispatch<React.SetStateAction<string>>
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const VideoBlock: FC<TVideoBlock> = ({ isShortGallery, setVideoId, setOpenModal }) => {
  const queryString = qs.stringify(
    { populate: ["preview"], pagination: { limit: 6 } },
    { encodeValuesOnly: true }
  )

  const { dataBackend, isLoading } = hooksData.useAxios<TDataVideos>({
    url: `/videos?${queryString}`,
  })

  const isShortgallery = useMemo(() => {
    const maxVideosInBlock = 4

    if (!dataBackend) {
      return false
    }

    if (isShortGallery && dataBackend.data.length > maxVideosInBlock) {
      return true
    }
  }, [isShortGallery, dataBackend])

  const onClickVideoItem = ({ id, onClick }: TOnClickVideoItem) => {
    if (id) {
      setVideoId(id as string)
    }

    if (onClick) {
      onClick(true)
    }
  }

  if (isLoading) {
    return (
      <Styled.WrapPreloader>
        <Preloader />
      </Styled.WrapPreloader>
    )
  }

  return (
    <Styled.WrapGallery>
      <Gallery>
        {dataBackend?.data.map(({ preview, documentId }) => {
          const {
            formats: {
              medium: { url },
            },
          } = preview

          return (
            <VideoItem
              key={documentId}
              sourcePreview={`${env.BACKEND_URL}${url}`}
              onClick={() => onClickVideoItem({ id: documentId, onClick: setOpenModal })}
            />
          )
        })}
      </Gallery>

      {isShortgallery ? (
        <Styled.PanelButtonsHideVideos>
          <Link to={linksPages.page_vblog.link}>
            <Styled.ButtonCustom as={Button} text={linksPages.page_vblog.link_name} />
          </Link>
        </Styled.PanelButtonsHideVideos>
      ) : (
        <Styled.PanelButtons>
          <Link to={linksPages.page_vblog.link}>
            <Styled.ButtonCustom as={Button} text={linksPages.page_vblog.link_name} />
          </Link>
        </Styled.PanelButtons>
      )}
    </Styled.WrapGallery>
  )
}

export default VideoBlock
