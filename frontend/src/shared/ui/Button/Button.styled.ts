import styled, { css } from "styled-components"

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

  &:hover {
    ${({ theme }) => css`
      border-color: ${theme.main.hover_text_button};
      background: ${theme.main.hover_background_button};
      color: ${theme.main.hover_text_button};
    `}
  }
`
