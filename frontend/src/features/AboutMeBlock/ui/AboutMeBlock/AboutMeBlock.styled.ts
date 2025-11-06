import styled from "styled-components"

export const Headline = styled.h2`
  text-align: left;
  font-size: 2.7rem;
  text-transform: math-auto;
  color: ${({ theme }) => theme.main.color_text};
  border-bottom: 3px solid ${({ theme }) => theme.main.color_text};
  padding: 0 0 1.5rem 0;
  font-weight: 600;
  letter-spacing: -2px;
`

export const AboutMeBlock = styled.section`
  background: ${({ theme }) => theme.main.background_black};
  font-family: ${({ theme }) => theme.main.font_family_headlines};
  padding: 4rem 2rem;
`

export const InfoBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  ${({ theme }) => theme.main.color_text};
`

export const Description = styled.div`
  span,
  p {
    color: #fff0f0a3;
    font-size: 0.875rem;
    line-height: 1.1rem;
  }
`
