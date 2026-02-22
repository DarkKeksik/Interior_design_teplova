import styled from "styled-components"

import { media } from "../styledMixins/media.styled"

export const ProjectGallery = styled.section``

export const ImageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`
