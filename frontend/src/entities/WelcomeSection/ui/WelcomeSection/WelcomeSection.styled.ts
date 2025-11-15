import styled from "styled-components"

export const Description = styled.p`
  text-align: center;
  font-size: 0.9375rem;
  font-family: ${({ theme }) => theme.main.font_family_text};
  font-weight: 500;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  height: calc(100vh - 50px);
  padding: 4rem;
  box-sizing: border-box;
`

export const Texts = styled.div``

export const WrapModel3DCurcle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
