import styled, { css } from "styled-components"

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  gap: 1rem;
  background: #141414;
  font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
  width: 100%;
`

export const VideoBlock = styled.video`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 1.5rem;
  min-height: 75vh;
`

export const Content = styled.div``

export const WrapVideoBlock = styled.div`
  position: relative;
`

export const Information = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.8rem;
  margin: 0 1.5rem;
  padding: 1.5rem 1.5rem;
  text-align: left;
  min-height: 8rem;
  background: #2f2f2f;
  border-radius: 10px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
`

export const PublishDataTime = styled.div`
  font-size: 0.875rem;
  font-weight: 300;
`

export const Description = styled.div`
  font-size: 1.06rem;
  line-height: 1.5rem;
`

export const Video = styled.div``
