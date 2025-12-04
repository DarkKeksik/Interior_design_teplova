import styled, { css } from "styled-components"

export const Wrap = styled.div`
  display: flex;
  justify-content: end;
  background: #282828;
  height: 4rem;
  overflow: hidden;
`

export const DrawingBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.main.background_black_extra};
  transform: translate(-100%);
  transition-duration: 0.1s;
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

    background: linear-gradient(0, #1b1b1b, #282828);
    width: 40px;
    height: 100%;
  }
`

export const BrashIcon = styled.div`
  & {
    transform: translateX(calc(100% + 30px));
    z-index: 1;
  }
`
