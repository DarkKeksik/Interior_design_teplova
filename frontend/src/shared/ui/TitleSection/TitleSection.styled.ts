import styled, { css } from "styled-components"

type TTitleSection = {
  isRight: boolean
  isBlackColor: boolean
}

export const TitleSection = styled.h2<TTitleSection>`
  font-size: 2.7rem;
  text-transform: math-auto;

  padding: 0 0 1.5rem 0;
  font-weight: 600;
  letter-spacing: -2px;
  margin-bottom: 2.5rem;

  color: ${({ theme, isBlackColor }) =>
    isBlackColor ? theme.main.color_text_extra_2 : theme.main.color_text};
  border-bottom: 3px solid
    ${({ theme, isBlackColor }) =>
      isBlackColor ? theme.main.color_text_extra_2 : theme.main.color_text};

  ${({ isRight }) =>
    isRight &&
    css`
      text-align: right;
    `};
`
