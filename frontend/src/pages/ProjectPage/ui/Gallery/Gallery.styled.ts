import styled from "styled-components"

export const Gallery = styled.div`
  width: 100%;
`

export const Slider = styled.div``

export const ImageSlider = styled.img`
  width: 100%;
  height: calc(100vh - 50px - 125px);
`

export const SwiperThumbBackground = styled.div`
  background: ${({ theme }) => theme.main.background_white};
`

export const ImageThumb = styled.img`
  width: 100%;
  height: 8rem;
`
