import styled from "styled-components"

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  gap: 1.5rem;
`

export const ContentImages = styled.div`
  flex: 1 1 0;
  align-self: center;
  padding-top: 3.5rem;
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
`

export const Title = styled.div`
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  font-weight: 100;
`

export const Description = styled.div`
  font-size: 0.9375rem;
  line-height: 1.8rem;
  padding-left: 1.5rem;
`

export const Panel = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 1.5rem;
`

export const ProjectInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-left: 3rem;
  min-height: 6.25rem;
`

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 0.625rem;
  padding: 2.5rem 1.5rem;
  background: #1b1b1b;
  border-radius: 5px;
`

export const TitleInfoItem = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
`

export const ValueInfoItem = styled.div`
  font-size: 0.875rem;
  font-weight: 100;
`

export const Button = styled.div`
  padding: 0.625rem 1.2rem;
`
