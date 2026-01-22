import styled from "styled-components"

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
