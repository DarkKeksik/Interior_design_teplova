import { useState, type FC } from "react"

import { VideoBlogPlayer } from "@entities/index"
import { SectionBlack, TitleSection, Modal } from "@shared/ui"
import { linksPages } from "@shared/config"

import { VideoBlock } from "../"

type TGalleryVideo = {
  isTitle?: boolean
}

const GalleryVideo: FC<TGalleryVideo> = ({ isTitle = true }) => {
  const [idVideo, setVideoId] = useState()
  const [isActiveVideoBlogPlayer, setIsActiveVideoBlogPlayer] = useState(false)

  return (
    <>
      <Modal
        size="l"
        onClose={setIsActiveVideoBlogPlayer}
        isOpen={isActiveVideoBlogPlayer}
        isHeader={false}
        isPadding={false}
      >
        <VideoBlogPlayer idVideo={idVideo} isShort />
      </Modal>

      <SectionBlack typeBg="blackExtra">
        {isTitle && <TitleSection>{linksPages.page_vblog.link_name}</TitleSection>}

        <VideoBlock
          isShortGallery
          setVideoId={setVideoId}
          setOpenModal={setIsActiveVideoBlogPlayer}
        />
      </SectionBlack>
    </>
  )
}

export default GalleryVideo
