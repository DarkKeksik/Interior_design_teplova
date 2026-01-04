import type { FC } from "react"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs } from "swiper/modules"
import "swiper/css"

import { env } from "@shared/config"

import * as Styled from "./Gallery.styled"

type TImage = {
  id: number
  documentId: string
  formats: {
    large: {
      url: string
    }
    medium: {
      url: string
    }
    small: {
      url: string
    }
    thumbnail: {
      url: string
    }
  }
}

type TGallery = {
  images: TImage[]
}

const Gallery: FC<TGallery> = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <Styled.Gallery>
      <Swiper modules={[Thumbs]} loop={true} thumbs={{ swiper: thumbsSwiper }}>
        {images.map(({ formats }) => (
          <SwiperSlide>
            <Styled.ImageSlider src={`${env.BACKEND_URL}${formats.large.url}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Styled.SwiperThumbBackground>
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress={true}
          slidesPerView={4}
          spaceBetween={0}
          loop={true}
          // @ts-ignore
          onSwiper={setThumbsSwiper}
        >
          {images.map(({ formats }) => (
            <SwiperSlide>
              <Styled.ImageThumb src={`${env.BACKEND_URL}${formats.large.url}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.SwiperThumbBackground>
    </Styled.Gallery>
  )
}

export default Gallery
