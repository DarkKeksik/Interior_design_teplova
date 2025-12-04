import type { FC } from "react"

import { useRef, useEffect } from "react"
import { MediaPlayer } from "dashjs"

import * as Styled from "./DASHVideoBlock.styled"

type TVideoBlock = {
  source_link?: string
  autoPlay: boolean
}

const url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd"

const DASHVideoBlock: FC<TVideoBlock> = ({ source_link, autoPlay = false, ...props }) => {
  const videoRef = useRef(null)
  const playerDASHRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      playerDASHRef.current = MediaPlayer().create()
      playerDASHRef.current.initialize(videoRef.current, url, autoPlay)
      // playerDASHRef.current.isMuted(false)
    }

    return () => {
      if (playerDASHRef.current) {
        playerDASHRef.current.destroy()
        playerDASHRef.current = null
      }
    }
  }, [])

  return (
    <Styled.Wrap>
      <Styled.Video
        poster="http://mediapm.edgesuite.net/will/dash/temp/poster.png"
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
