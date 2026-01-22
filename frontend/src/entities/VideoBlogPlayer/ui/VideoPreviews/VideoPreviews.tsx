import type { FC } from "react"
import { useMemo } from "react"
import qs from "qs"

import { Preloader } from "@shared/ui"
import { env, linksPages } from "@shared/config"
import { hooksData } from "@shared/hooks"

import { VideoPreview } from "../"
import * as Styled from "./VideoPreviews.styled"

type TVideoPreviews = {
  isShort?: boolean
  idCurrentVideo: string
}

const VideoPreviews: FC<TVideoPreviews> = ({ isShort = false, idCurrentVideo }) => {
  const queryStringAllVideos = useMemo(() => {
    let queryString = { populate: ["preview"] } as const

    if (idCurrentVideo) {
      queryString.filters = { documentId: { $ne: idCurrentVideo } }
    }

    return qs.stringify(queryString, { encodeValuesOnly: true })
  }, [])

  const { dataBackend: dataBackendVideos, isLoading } = hooksData.useAxios({
    url: `/videos?${queryStringAllVideos}`,
  })

  if (isLoading) {
    return (
      <Styled.WrapPreloader>
        <Preloader />
      </Styled.WrapPreloader>
    )
  }

  return (
    <Styled.ListVideos isShort={isShort}>
      {dataBackendVideos?.data?.map(({ preview = {}, name, slug }, id) => {
        const { formats } = preview
        const { small } = formats || {}
        const { url: urlPreview } = small || {}
        const fullUrlPreview = `${env.BACKEND_URL}${urlPreview}`
        const lintToVideoPage = `${linksPages.page_vblog.link}/${slug}`

        return (
          <VideoPreview
            key={id}
            previewUrl={fullUrlPreview}
            name={name}
            linkToPage={lintToVideoPage}
          />
        )
      })}
    </Styled.ListVideos>
  )
}

export default VideoPreviews
