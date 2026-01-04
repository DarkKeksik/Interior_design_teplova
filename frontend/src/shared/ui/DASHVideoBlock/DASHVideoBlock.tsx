import type { FC } from "react"

import { useRef, useEffect } from "react"
import { MediaPlayer, MediaPlayerClass } from "dashjs"

import * as Styled from "./DASHVideoBlock.styled"

type TVideoBlock = {
  source_link?: string
  autoPlay?: boolean
  url_manifest?: string
  preview_img?: string
  loop?: boolean
  controls?: boolean
}

const url_manifest_mock = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"
const preview_img_mock = "http://mediapm.edgesuite.net/will/dash/temp/poster.png"

const DASHVideoBlock: FC<TVideoBlock> = ({
  source_link,
  autoPlay = false,
  url_manifest = url_manifest_mock,
  preview_img = preview_img_mock,
  loop = false,
  ...props
}) => {
  const videoRef = useRef(null)
  const playerDASHRef = useRef<MediaPlayerClass | null>(MediaPlayer().create())

  useEffect(() => {
    if (videoRef.current) {
      playerDASHRef.current?.initialize(videoRef.current, url_manifest, autoPlay)
    }

    return () => {
      if (playerDASHRef.current) {
        playerDASHRef.current.destroy()
        playerDASHRef.current = null
      }
    }
  }, [url_manifest, autoPlay])

  return (
    <Styled.Wrap>
      <Styled.Video
        poster={preview_img}
        ref={videoRef}
        autoPlay={autoPlay}
        muted={autoPlay}
        controls
        {...props}
      />
    </Styled.Wrap>
  )
}

export default DASHVideoBlock
