import styled, { keyframes, css } from "styled-components"
import { TSizes } from "./Preloader"

const animationSpin = keyframes`
      0%   {
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
      }
      100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
      }
`

export const Wrap = styled.div`
  position: relative;
`

export const Preloader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div<{ size: keyof typeof TSizes }>`
  display: block;
  position: relative;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: ${({ theme }) => theme.main.preloader.color_1};
  animation: ${animationSpin} 2s linear infinite;

  ${({ size }) => {
    switch (size) {
      case TSizes.s:
        return css`
          width: 32px;
          height: 32px;
        `
      case TSizes.m:
        return css`
          width: 64px;
          height: 64px;
        `
      case TSizes.l:
        return css`
          width: 100px;
          height: 100px;
        `
    }
  }}

  &:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${({ theme }) => theme.main.preloader.color_2};
    animation: ${animationSpin} 3s linear infinite;
    opacity: 0.7;
  }
  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: ${({ theme }) => theme.main.preloader.color_3};
    animation: ${animationSpin} 1.5s linear infinite;
    opacity: 0.2;
  }
`
