import styled from "styled-components"

import { mixinsMediaStyled } from "@shared/ui"

export const Gallery = styled.div`
  width: 100%;
`

export const Slider = styled.div``

export const ImageSlider = styled.img`
  width: 100%;
  height: calc(100vh - 50px - 125px);

  ${mixinsMediaStyled.media.mobile} {
    height: auto;
    max-height: 300px;
    object-fit: cover;
  }
`

export const SwiperThumbBackground = styled.div`
  background: ${({ theme }) => theme.main.background_white};
`

export const ImageThumb = styled.img`
  width: 100%;
  height: 8rem;

  ${mixinsMediaStyled.media.mobile} {
    height: 5rem;
  }
`
