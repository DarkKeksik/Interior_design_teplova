import styled from "styled-components"
import { media } from "@app/styles/media.styled"

export const RequestProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  min-width: 400px;
  min-height: 200px;
  border-radius: 5px;
  background: ${({ theme }) => theme.main.background_black_extra};

  ${media.mobile} {
    min-width: 100%;
    padding: 1rem;
    min-height: auto;
  }
`

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: end;
  width: 100%;

  ${media.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
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

  ${media.mobile} {
    font-size: 1rem;
    line-height: 1.2rem;
    padding-left: 0.5rem;
  }
`

export const Title_extra = styled.span`
  padding-left: 1rem;

  ${media.mobile} {
    padding-left: 0.5rem;
  }
`
