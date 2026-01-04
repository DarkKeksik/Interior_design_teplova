import styled from "styled-components"

export const Description = styled.p`
  margin-top: -1rem;
  text-align: center;
  font-size: 0.9375rem;
  font-family: ${({ theme }) => theme.main.font_family_text};
  font-weight: 500;
`

export const WelcomeSection = styled.div`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 50px);
`

export const BackgroundDark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(0.9turn, rgba(0, 0, 0, 1) 0%, rgb(255 240 240 / 70%) 100%);
  z-index: 2;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 1.5rem;
  padding: 4rem 2rem;
  box-sizing: border-box;
  height: 100%;
  z-index: 2;
`

export const Texts = styled.div`
  position: relative;
  min-height: 100px;
`

export const WrapModel3DCurcle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
