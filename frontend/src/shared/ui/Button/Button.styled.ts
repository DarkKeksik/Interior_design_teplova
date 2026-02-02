import styled, { css } from "styled-components"
import { media } from "@app/styles/media.styled"

export const Button = styled.button`
  border: 2px solid;
  ${({ theme }) => css`
    border-color: ${theme.main.background_button};
    background: ${theme.main.background_button};
    color: ${theme.main.color_button};
    transition-duration: ${theme.main.animation_duration};
  `}
  cursor: pointer;

  min-height: 2rem;
  min-width: 100px;
  padding: 0 1rem;
  border-radius: 200px;

  font-size: 13px;
  font-weight: 500;

  font-family: ${({ theme }) => theme.main && theme.main.font_family_text};

  ${media.mobile} {
    font-size: 12px;
    min-width: 80px;
    min-height: 1.75rem;
    padding: 0 0.75rem;
  }

  &:hover {
    ${({ theme }) => css`
      border-color: ${theme.main.hover_text_button};
      background: ${theme.main.hover_background_button};
      color: ${theme.main.hover_text_button};
    `}
  }
`
