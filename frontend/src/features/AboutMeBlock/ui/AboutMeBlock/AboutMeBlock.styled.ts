import styled from "styled-components"

export const WrapPreloader = styled.div`
  position: relative;
  min-height: 200px;
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
  color: #fff0f0a3;
  font-size: 0.875rem;
  line-height: 1.1rem;
`
