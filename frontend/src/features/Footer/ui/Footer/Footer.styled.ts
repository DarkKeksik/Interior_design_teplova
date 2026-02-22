import styled from "styled-components"

import { mixinsMediaStyled } from "@shared/ui"

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: minmax(250px, 0.3fr) 1fr;
  min-height: 150px;
  padding: 2rem 4rem;
  background: ${({ theme }) => theme.main.background_black_extra};
  border-top: 3px solid #fffff0;
  box-sizing: content-box;

  ${mixinsMediaStyled.media.mobile} {
    grid-template-columns: 1fr;
    padding: 1.5rem 1rem;
    min-height: auto;
    gap: 1.5rem;
  }
`

export const LogoFooter = styled.p`
  & {
    font-size: 1.2rem;
  }
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 10px;

  ${mixinsMediaStyled.media.mobile} {
    gap: 8px;
  }
`

export const CopyrightNotice = styled.small`
  font-size: 12px;

  ${mixinsMediaStyled.media.mobile} {
    font-size: 11px;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  border-right: 2px solid #fffff0;

  ${mixinsMediaStyled.media.mobile} {
    border-right: none;
    border-bottom: 2px solid #fffff0;
    padding-bottom: 1rem;
    gap: 0.5rem;
  }
`
