import styled from "styled-components"

export const ProjectInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: calc(100vh - (50px));
  padding: 3rem;
`

export const Title = styled.h2`
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: 500;
`

export const DescriptionBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 1.5rem;
`

export const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const DescriptionIcon = styled.span`
  width: 2rem;
  height: 2rem;
  fill: ${({ theme }) => theme.main.color_text};
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const InfoName = styled.div`
  font-weight: 100;
  font-size: 0.875rem;
`

export const InfoValue = styled.div`
  font-weight: 600;
  font-size: 0.9375rem;
`

export const TextDescription = styled.p`
  line-height: 1.5rem;
  font-size: 0.9375rem;
`
