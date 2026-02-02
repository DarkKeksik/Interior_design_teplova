import styled from "styled-components"
import { media } from "@app/styles/media.styled"

export const ProjectInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: calc(100vh - (50px));
  padding: 3rem;

  ${media.mobile} {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
    min-height: auto;
  }
`

export const Title = styled.h2`
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: 500;

  ${media.mobile} {
    font-size: 1.125rem;
    letter-spacing: 1px;
  }
`

export const DescriptionBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 0 1.5rem;

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0;
  }
`

export const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media.mobile} {
    gap: 0.75rem;
  }
`

export const DescriptionIcon = styled.span`
  width: 2rem;
  height: 2rem;
  fill: ${({ theme }) => theme.main.color_text};

  ${media.mobile} {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${media.mobile} {
    gap: 4px;
  }
`

export const InfoName = styled.div`
  font-weight: 100;
  font-size: 0.875rem;

  ${media.mobile} {
    font-size: 0.8rem;
  }
`

export const InfoValue = styled.div`
  font-weight: 600;
  font-size: 0.9375rem;

  ${media.mobile} {
    font-size: 0.875rem;
  }
`

export const TextDescription = styled.p`
  line-height: 1.5rem;
  font-size: 0.9375rem;

  ${media.mobile} {
    font-size: 0.875rem;
    line-height: 1.4rem;
  }
`
