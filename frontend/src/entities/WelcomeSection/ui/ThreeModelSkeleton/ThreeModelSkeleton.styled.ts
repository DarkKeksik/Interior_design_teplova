import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 50vh;
  height: 50vh;
  border: 0.875rem solid ${({ theme }) => theme.main.background_black_extra};
  background: ${({ theme }) => theme.main.background_white};
  border-radius: 100%;
`

export const Shadow = styled.div`
  background: ${({ theme }) => theme.main.background_black_extra};
  position: absolute;
  top: 0;
  width: 55vh;
  height: 45vh;
  transform: translate(7%, 10%);
  border-radius: 100%;
  z-index: 0;
  box-shadow: -90px -32px 0 ${({ theme }) => theme.main.background_white};
  filter: blur(50px);
`
