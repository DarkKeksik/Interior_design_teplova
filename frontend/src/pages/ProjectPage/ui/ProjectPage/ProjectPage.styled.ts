import styled from "styled-components"

import { mixinsMediaStyled } from "@shared/ui"

export const Wrap = styled.div`
  min-height: calc(100vh - 50px);

  ${mixinsMediaStyled.media.mobile} {
    min-height: calc(100vh - 60px);
  }
`

export const WrapContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  ${mixinsMediaStyled.media.mobile} {
    flex-direction: column;
  }
`

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: #282828;
  position: sticky;
  top: 50px;
  height: 100%;
  width: 50%;

  ${mixinsMediaStyled.media.mobile} {
    position: relative;
    top: 0;
    width: 100%;
    min-height: 300px;
  }
`

export const RightBlock = styled.div`
  width: 100%;
  box-shadow: -10px 0 10px #00000082;
  overflow: hidden;
  z-index: 0;

  ${mixinsMediaStyled.media.mobile} {
    box-shadow: none;
  }
`

export const InfoContent = styled.div`
  padding: 0 1.5rem;

  ${mixinsMediaStyled.media.mobile} {
    padding: 0 1rem;
  }
`
