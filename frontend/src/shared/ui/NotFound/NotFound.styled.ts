import { media } from "@app/styles/media.styled"
import styled from "styled-components"

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;

  ${media.mobile} {
    padding: 1rem;
  }
`
