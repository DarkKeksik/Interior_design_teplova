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
  height: 100%;
  padding: 4rem;
  box-sizing: border-box;
`

export const Texts = styled.div``

export const WrapModel3DCurcle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: "";
    background: ${({ theme }) => theme.main.background_black_extra};
    width: 100%;
    height: 100%;
    position: absolute;
    width: 50vh;
    height: 50vh;
    z-index: 0;
    transform: translate(10%, 8%);
    border-radius: 100%;
    z-index: 0;
  }
`
