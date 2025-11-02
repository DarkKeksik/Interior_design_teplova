import styled from "styled-components"

export const WrapRound = styled.div`
  position: relative;
`

export const Shadow = styled.div`
  background: ${({ theme }) => theme.main.background_black_extra};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  width: 50vh;
  height: 50vh;
  z-index: 0;
  transform: translate(10%, 8%);
  border-radius: 100%;
  z-index: 0;
`

export const Round = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  width: 50vh;
  height: 50vh;
  border-radius: 100%;
  background: ${({ theme }) => theme.main.background_white};
  border: 5px solid ${({ theme }) => theme.main.background_black_extra};
  z-index: 1;
`
