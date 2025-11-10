import styled from "styled-components"

import { Button } from "@shared/ui"

export const Wrap = styled.div`
  font-size: 1em;
  opacity: 0;
  transition-duration: 0.3s;
`

export const Content = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 1em 3em;
  font-size: 1em;
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1b1b1bf0;
  border: 0.875em dotted #fffff00f;
`

export const Title = styled.p`
  color: #fffff0;
  font-size: 2em;
  font-weight: 600;
  font-family: ${({ theme }) => theme.main.font_family_headlines};
`

export const Description = styled.p`
  color: #fffff0;
  font-family: ${({ theme }) => theme.main.font_family_headlines};
  line-height: 1.5em;
  font-size: 1.1em;
  max-height: 100px;
  overflow: hidden;
`

export const WrapRight = styled.div`
  display: flex;
  justify-content: end;
`

export const ButtonCustom = styled.button`
  & {
    border: 2px solid;
    border-color: #fffff0;
    background: #fffff0;
    color: #1b1b1b;
    font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
    transition-duration: 0.3s;

    min-height: 2rem;
    min-width: 100px;
    padding: 0 1rem;
    border-radius: 200px;
    font-size: 13px;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    max-width: max-content;
    text-transform: uppercase;
    cursor: pointer;

    font-weight: 600;

    &:hover {
      border-color: #fffff0;
      background: #2a2a2a;
      color: #fffff0;

      svg {
        fill: #fffff0;
      }
    }
  }
`
