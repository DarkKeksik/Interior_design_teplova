import styled from "styled-components"

export const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
`

export const Preview = styled.img`
  min-height: 270px;
`

export const VideoServices = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding: 0.5rem 1rem;

  position: absolute;
  bottom: 0;
  z-index: 1;
`

export const LinkVideoService = styled.a``

export const IconLink = styled.span`
  background: white;
  border-radius: 100px;
  padding: 0.1rem 0.2rem;

  transition-duration: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`

export const VideoPreview = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`

export const VideoPlayBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  background: #000000c4;
  height: 100%;
  width: 100%;
  cursor: pointer;

  svg {
    transition-duration: 0.3s;
  }

  &:hover > svg {
    fill: #cba35c;
    transform: scale(1.2);
  }
`
