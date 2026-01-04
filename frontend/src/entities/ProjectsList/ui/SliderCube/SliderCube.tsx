import type { FC } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCube, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cube"
import "swiper/css/pagination"

import type { TImage } from "@shared/api"
import { env } from "@shared/config"

import * as Styled from "./SliderCube.styled"

type TSliderCube = {
  images: TImage[]
}

const SliderCube: FC<TSliderCube> = ({ images }) => {
  return (
    <Styled.SliderCube
      as={Swiper}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      effect={"cube"}
      speed={800}
      grabCursor={true}
      loop={true}
      cubeEffect={{
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      modules={[EffectCube, Pagination, Autoplay]}
    >
      {images.map(({ formats }) => {
        return (
          <SwiperSlide>
            <Styled.Item src={`${env.BACKEND_URL}${formats.large.url}`} />
          </SwiperSlide>
        )
      })}
    </Styled.SliderCube>
  )
}

export default SliderCube
