import styled from "styled-components"

export const RequestProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  min-width: 400px;
  min-height: 200px;
  border-radius: 5px;
  background: ${({ theme }) => theme.main.background_black_extra};
`

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: end;
  width: 100%;
`

export const Title = styled.h3`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  padding-left: 1rem;
  line-height: 1.4rem;
  ${({ theme }) => theme.main.color_text};
`

export const Title_extra = styled.span`
  padding-left: 1rem;
`
