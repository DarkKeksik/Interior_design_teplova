import styled from "styled-components"

import { mixinsMediaStyled } from "@shared/ui"

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  gap: 1.5rem;

  ${mixinsMediaStyled.media.mobile} {
    gap: 1rem;
  }
`

export const ContentImages = styled.div`
  flex: 1 1 0;
  align-self: center;
  padding-top: 3.5rem;

  ${mixinsMediaStyled.media.mobile} {
    padding-top: 1.5rem;
    width: 100%;
  }
`

export const ProjectItem = styled.div`
  display: flex;
  gap: 2rem;
  min-height: 50vh;
  padding: 4rem;

  &:nth-of-type(odd) {
    background: #1b1b1b3d;
  }

  &:nth-of-type(2n) {
    flex-direction: row-reverse;
  }

  ${mixinsMediaStyled.media.mobile} {
    flex-direction: column !important;
    gap: 1rem;
    min-height: auto;
    padding: 2rem 1rem;
  }
`

export const Title = styled.div`
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  font-weight: 600;

  ${mixinsMediaStyled.media.mobile} {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`

export const Description = styled.div`
  font-size: 0.9375rem;
  line-height: 1.8rem;

  ${mixinsMediaStyled.media.mobile} {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`

export const Panel = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 1.5rem;

  ${mixinsMediaStyled.media.mobile} {
    justify-content: center;
    margin-top: 1rem;
  }
`

export const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  min-height: 6.25rem;

  ${mixinsMediaStyled.media.mobile} {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    min-height: auto;
  }
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 0.625rem;
  padding: 1.8rem 1.4rem;
  background: #1b1b1b;
  border-radius: 5px;

  ${mixinsMediaStyled.media.mobile} {
    padding: 1rem;
    gap: 0.5rem;
  }
`

export const TitleInfoItem = styled.div`
  font-size: 0.875rem;
  font-weight: 600;

  ${mixinsMediaStyled.media.mobile} {
    font-size: 0.8rem;
  }
`

export const ValueInfoItem = styled.div`
  font-size: 0.875rem;
  font-weight: 100;

  ${mixinsMediaStyled.media.mobile} {
    font-size: 0.8rem;
  }
`

export const Button = styled.div`
  padding: 0.625rem 1.2rem;

  ${mixinsMediaStyled.media.mobile} {
    padding: 0.5rem 1rem;
  }
`
