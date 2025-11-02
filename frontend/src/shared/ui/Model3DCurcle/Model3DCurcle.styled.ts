import styled from "styled-components"

export const WrapRound = styled.div`
  width: 50vh;
  height: 50vh;
  border-radius: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.main.background_white};
  z-index: 0;
`
