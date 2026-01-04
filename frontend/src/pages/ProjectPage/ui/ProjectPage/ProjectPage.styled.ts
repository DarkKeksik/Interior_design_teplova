import styled from "styled-components"

export const Wrap = styled.div`
  min-height: calc(100vh - 50px);
`

export const WrapContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: #282828;
  position: sticky;
  top: 50px;
  height: 100%;
  width: 50%;
`

export const RightBlock = styled.div`
  width: 100%;
  box-shadow: -10px 0 10px #00000082;
  overflow: hidden;
  z-index: 0;
`

export const InfoContent = styled.div`
  padding: 0 1.5rem;
`
