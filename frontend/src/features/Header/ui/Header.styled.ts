import styled from "styled-components"

import { mixinsMediaStyled } from "@shared/ui"

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  height: 50px;
  padding: 0 2rem;
  background: #1b1b1bf0;
  box-shadow: 0 0 5px ${({ theme }) => theme.main.background_black_extra};
  border-bottom: 2px solid #2f2f2f;

  position: sticky;
  top: 0;
  z-index: 1001;

  ${mixinsMediaStyled.media.mobile} {
    grid-template-columns: auto 1fr auto;
    gap: 0.5rem;
    padding: 0 1rem;
    height: 60px;
  }
`
