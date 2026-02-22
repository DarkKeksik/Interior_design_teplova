import styled from "styled-components"

import { media } from "../styledMixins/media.styled"

export const MobileMenu = styled.div`
  display: none;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
  }
`
