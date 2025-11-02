import styled from "styled-components"

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.1rem;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: ${({ theme }) => theme.main.font_family_text};

  color: {
    ${({ theme }) => theme.main.color_text_extra}
  }
`
