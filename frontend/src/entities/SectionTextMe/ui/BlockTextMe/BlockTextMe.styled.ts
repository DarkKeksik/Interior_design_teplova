import styled from "styled-components"

export const Wrap = styled.div`
  background: linear-gradient(0.04turn, rgb(203 163 92 / 68%) 0%, rgb(255 240 240) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 2rem;
  box-shadow: 0 0 1rem 5px #00000033 inset;
  font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto) 1fr;
  gap: 1.5rem;
  align-items: center;

  padding: 2.5rem 1.5rem;
  max-width: 640px;
  width: 100%;
  background: #1b1b1b;
  height: 320px;
  border-radius: 10px;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.h4`
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
`

export const SubTitle = styled.p`
  font-size: 14px;
  text-align: center;
`
