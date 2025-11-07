import styled from "styled-components"

export const IconWrap = styled.div``

export const Icon = styled.span`
  transition-duration: ${({ theme }) => theme.main.animation_duration};

  &:hover {
    stroke: ${({ theme }) => theme.main.some_accent};
  }
`
