import styled from "styled-components"

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: minmax(250px, 0.3fr) 1fr;
  min-height: 150px;
  padding: 2rem 4rem;
  background: ${({ theme }) => theme.main.background_black_extra};
  border-top: 3px solid #fffff0;
  box-sizing: content-box;
`

export const LogoFooter = styled.p`
  & {
    font-size: 1.2rem;
  }
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
`

export const CopyrightNotice = styled.small`
  font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
  font-size: 12px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  border-right: 2px solid #fffff0;
`
