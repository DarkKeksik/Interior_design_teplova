import styled from "styled-components"

export const Chart_gantt = styled.div`
  padding: 2rem;
  font-family: ${({ theme }) => theme.main && theme.main.font_family_text};

  .grid-header {
    background: #2a2a2a;
  }

  .upper-text {
    color: white;
  }
`
