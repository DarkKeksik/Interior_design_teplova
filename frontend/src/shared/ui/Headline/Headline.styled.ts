import styled from "styled-components"

export const Headline = styled.h1`
  color: ${({ theme }) => theme.main.color_text};
  /* font-size: ${({ theme }) => theme.main.size_headlines}; */
  font-size: 2.2rem;
  font-family: ${({ theme }) => theme.main.font_family_headlines};

  text-align: left;
  padding: 3rem 2rem;
  font-weight: 600;
  letter-spacing: -2px;
`
