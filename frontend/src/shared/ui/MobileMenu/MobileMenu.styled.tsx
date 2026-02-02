import { media } from "@app/styles/media.styled"
import styled from "styled-components"

export const MobileMenu = styled.div`
  display: none;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
  }
`
