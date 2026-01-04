import styled, { css } from "styled-components"

type TSizes = { s: "s"; m: "m"; l: "l" }

type THeadline = {
  size: keyof TSizes
}

export const Headline = styled.h1<THeadline>`
  color: ${({ theme }) => theme.main.color_text};
  /* font-size: ${({ theme }) => theme.main.size_headlines}; */
  font-size: 2.2rem;
  font-family: ${({ theme }) => theme.main.font_family_headlines};

  text-align: left;
  padding: 3rem 2rem;
  font-weight: 600;
  letter-spacing: -2px;

  ${({ size }) => {
    switch (size) {
      case "s":
        return css`
          font-size: 1rem;
        `
      case "m":
        return css`
          font-size: 2.2rem;
        `
      case "l":
        return css`
          font-size: 3rem;
        `
    }
  }}
`
