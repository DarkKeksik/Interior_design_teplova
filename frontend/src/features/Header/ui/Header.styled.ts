import styled from "styled-components"

export const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  height: 50px;
  padding: 0 2rem;
  background: ${({ theme }) => theme.main.background_black_extra};
`
