import styled, { css, keyframes } from "styled-components"

import { mixinsMediaStyled } from "@shared/ui"

type TCustomSideView = {
  translateZ: string
  rotateX?: string
  rotateY?: string
  background: string
}

const rotateAnimation = keyframes`
  25% { transform: translateZ(-100px) rotateY(-90deg); }
  50% { transform: translateZ(-100px) rotateY(-180deg); }
  75% { transform: translateZ(-100px) rotateX(-90deg); }
  85% { transform: translateZ(-100px) rotateX(-90deg); }
`

const customSideView = ({
  rotateX = "0",
  rotateY = "0",
  translateZ,
  background,
}: TCustomSideView) => css`
  transform: rotateX(${rotateX}) rotateY(${rotateY}) translateZ(${translateZ});
  background: ${({ theme }) => theme.main.background_white};
`

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  justify-content: center;
  height: 100vh;
  padding: 2rem;

  ${mixinsMediaStyled.media.mobile} {
    padding: 1rem;
  }
`

const SideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 200px;
  height: 200px;
  font-size: 120px;
  line-height: 200px;
  text-align: center;
  color: ${({ theme }) => theme.main.color_text_opposite};
  border: 1px solid #000;
`

export const BoxScene = styled.div`
  perspective: 400px;
`

export const Box = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform: translateZ(-100px);
  transform-style: preserve-3d;
  animation: ${rotateAnimation} 4s infinite;
  transition: ${({ theme }) => theme.main.animation_duration};
`

export const Front = styled(SideBox)`
  ${customSideView({
    rotateY: "0deg",
    translateZ: "100px",
    background: "#FFF",
  })}
`

export const Back = styled(SideBox)`
  ${customSideView({
    rotateY: "90deg",
    translateZ: "100px",
    background: "#FFF",
  })}
`

export const Right = styled(SideBox)`
  ${customSideView({
    rotateY: "180deg",
    translateZ: "100px",
    background: "#FFF",
  })}
`

export const Left = styled(SideBox)`
  ${customSideView({
    rotateY: "-90deg",
    translateZ: "100px",
    background: "#FFF",
  })}
`

export const Top = styled(SideBox)`
  ${customSideView({
    rotateX: "90deg",
    translateZ: "100px",
    background: "#FFF",
  })}
`

export const Bottom = styled(SideBox)`
  ${customSideView({
    rotateX: "-90deg",
    translateZ: "100px",
    background: "#FFF",
  })}
`

export const SubText = styled.span`
  color: #f74c4c;
  font-size: 2rem;
  font-weight: 400;
`

export const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
