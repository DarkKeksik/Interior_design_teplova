import type { FC } from "react"

import * as Styled from "./Gallery.styled"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Thumbs } from "swiper/modules"

import "swiper/css"

const images = [
  "/img/gallery_main.jpg",
  "/img/2x-small-gallery.jpg",
  "/img/1.5-small-gallery.jpg",
  "/img/2.5x-small-gallery.jfif",
  "/img/2x-small-gallery.jpg",
  "/img/gallery_main.jpg",
  "/img/2x-small-gallery.jpg",
]

const Gallery: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <Styled.Gallery>
      <Swiper modules={[Thumbs]} loop={true} thumbs={{ swiper: thumbsSwiper }}>
        {images.map((src) => (
          <SwiperSlide>
            <Styled.ImageSlider src={src} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress={true}
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        onSwiper={setThumbsSwiper}
      >
        {images.map((src) => (
          <SwiperSlide>
            <Styled.ImageThumb src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Gallery>
  )
}

export default Gallery
