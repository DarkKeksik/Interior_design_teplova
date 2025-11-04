import styled, { css } from "styled-components"

export const Wrap = styled.div`
  display: flex;
  justify-content: end;
  background: ${({ theme }) => theme.main.background_white};
  height: 50px;
  overflow: hidden;
`

export const DrawingBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.main.background_black_extra};
  transform: translate(-100%);
  transition-duration: 1s;
  position: relative;

  ${({ theme }) => css`
    background: linear-gradient(
      0,
      ${theme.main.background_black_extra},
      ${theme.main.background_black}
    );
  `}

  &:after {
    content: "";
    position: absolute;
    right: -39px;

    background: linear-gradient(90deg, #2a2a2a, #8e8e8e);
    width: 40px;
    height: 100%;
  }
`

export const BrashIcon = styled.div`
  & {
    transform: translate(calc(100% + 30px), -15px);
    z-index: 1;
  }
`
