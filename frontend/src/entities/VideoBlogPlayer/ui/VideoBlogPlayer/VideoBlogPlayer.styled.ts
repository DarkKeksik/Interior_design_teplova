import styled, { css } from "styled-components"

type TListVideos = {
  isShort: boolean
}

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  gap: 1rem;
  background: #141414;
  font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
`

export const VideoBlock = styled.video`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 1.5rem;
  min-height: 74vh;
`

export const Content = styled.div``

export const WrapVideoBlock = styled.div`
  position: relative;
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  margin: 0 1.5rem;
  padding: 0 1.5rem;
  text-align: left;
  min-height: 9.375rem;
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

export const ListVideos = styled.div<TListVideos>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

  ${({ isShort }) =>
    isShort &&
    css`
      max-height: 95vh;
    `}

  overflow-x: auto;
  background: #292929;
`

export const Video = styled.div``

export const BackgroundButtonPlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 9.375rem;
  background: #ffffff5c;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition-duration: 0.3s;

  svg {
    transition-duration: 0.3s;
  }

  &:hover {
    background: #1414148f;

    svg {
      transform: scale(1.2);
      fill: #cba35c;
    }
  }
`

export const WrapPreview = styled.div`
  position: relative;
  height: 100%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  text-align: left;
`

export const Preview = styled.img`
  width: 100%;
  height: 9.375rem;
  border-radius: 10px;
`

export const TitlePreview = styled.p`
  font-weight: 500;
`
