import React, { useState, type FC } from "react"
import { Link } from "react-router-dom"

import { VideoBlogPlayer } from "@entities/index"
import { Gallery, SectionBlack, TitleSection, Button, Modal } from "@shared/ui"
import { linksPages } from "@shared/config"

import { VideoItem } from "../"
import * as Styled from "./GalleryVideo.styled"

const imagesSrc = [
  "https://www.lendlease.com/contentassets/302840d3bc9846579cb9f785ed8abb9a/luxury-interior-design.jpg",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/520111262.jpg?k=87f5e7f581158a06e1304d590d391e942d6c1cba0543df16a671927e3323cca0&o=",
  "https://www.astraapartments.com.au/wp-content/uploads/2024/07/Southbank-Apartments-Melbourne-Astra-Apartments-1-bed-ms-ks.jpg",
  "https://www.hellolanding.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flanding-hero-v2.b1e86bba.jpg&w=3840&q=75",
  "https://artiqueresort.com.au/wp-content/uploads/2025/07/Artique-Resort-Surfers-Paradise-805-2-bedroom-apartment-living.jpg",
  "https://www.astraapartments.com.au/wp-content/uploads/2024/07/Southbank-Apartments-Melbourne-Astra-Apartments-1-bed-ms-ks.jpg",
]

type TGalleryVideo = {
  isTitle?: boolean
  isShortGallery?: boolean
}

type TOnClickVideoItem = {
  id: string | number
  onClick: React.Dispatch<React.SetStateAction<boolean>>
}

const GalleryVideo: FC<TGalleryVideo> = ({ isTitle = true, isShortGallery = true }) => {
  const [idVideo, setVideoId] = useState(0)
  const [isActiveVideoBlogPlayer, setIsActiveVideoBlogPlayer] = useState(false)

  const onClickVideoItem = ({ id, onClick }: TOnClickVideoItem) => {
    if (id) {
      setVideoId(id as number)
    }

    if (onClick) {
      onClick(true)
    }
  }

  return (
    <>
      <Modal
        size="l"
        onClose={setIsActiveVideoBlogPlayer}
        isOpen={isActiveVideoBlogPlayer}
        isHeader={false}
        isPadding={false}
      >
        <VideoBlogPlayer activeVideoId={idVideo} isShort={true} />
      </Modal>

      <SectionBlack typeBg="blackExtra">
        {isTitle && <TitleSection>{linksPages.page_vblog.link_name}</TitleSection>}

        <Styled.WrapGallery>
          <Gallery>
            {imagesSrc.map((source, id) => (
              <VideoItem
                key={id}
                sourcePreview={source}
                onClick={() => onClickVideoItem({ id, onClick: setIsActiveVideoBlogPlayer })}
              />
            ))}
          </Gallery>

          {isShortGallery && (
            <Styled.PanelButtons>
              <Link to={linksPages.page_vblog.link}>
                <Styled.ButtonCustom as={Button} text={linksPages.page_vblog.link_name} />
              </Link>
            </Styled.PanelButtons>
          )}
        </Styled.WrapGallery>
      </SectionBlack>
    </>
  )
}

export default GalleryVideo
