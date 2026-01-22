import type { FC } from "react"
import qs from "qs"

import { useRef, useEffect, useMemo } from "react"
import { MediaPlayer, MediaPlayerClass } from "dashjs"

import { hooksData } from "@shared/hooks"

import * as Styled from "./DASHVideoBlock.styled"

type TVideoBlock = {
  sourceLink?: string
  autoPlay?: boolean
  urlManifest?: string
  previewImg?: string
  loop?: boolean
  controls?: boolean
}

const urlManifestMock = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"
const previewImgMock = "http://mediapm.edgesuite.net/will/dash/temp/poster.png"

const DASHVideoBlock: FC<TVideoBlock> = ({
  sourceLink,
  autoPlay = false,
  urlManifest = urlManifestMock,
  previewImg = previewImgMock,
  loop = false,
  ...props
}) => {
  const videoRef = useRef(null)
  const playerDASHRef = useRef<MediaPlayerClass | null>(MediaPlayer().create())

  useEffect(() => {
    if (videoRef.current) {
      playerDASHRef.current?.initialize(videoRef.current, urlManifest, autoPlay)
    }

    return () => {
      if (playerDASHRef.current) {
        playerDASHRef.current.destroy()
        playerDASHRef.current = null
      }
    }
  }, [urlManifest, autoPlay])

  return (
    <Styled.Wrap>
      <Styled.Video
        poster={previewImg}
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
