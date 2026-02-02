import styled from "styled-components"
import { media } from "@app/styles/media.styled"

export const GalleryProjects = styled.div`
  padding: 4rem 2rem;

  ${media.mobile} {
    padding: 2rem 1rem;
  }
`

export const WrapPreloader = styled.div`
  position: relative;
  min-height: calc(60vh - 50px);

  ${media.mobile} {
    min-height: calc(50vh - 60px);
  }
`

export const WrapGallery = styled.div`
  position: relative;
  max-height: 60vh;
  overflow: hidden;

  ${media.mobile} {
    max-height: 50vh;
  }
`

export const PanelButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem;

  ${media.mobile} {
    padding: 1rem;
  }
`

export const PanelButtonsHideVideos = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  background: linear-gradient(0deg, rgb(27 27 27) 0, rgb(27 27 27 / 63%) 60%, transparent);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: 50%;
`

export const ButtonCustom = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;

  ${media.mobile} {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`
