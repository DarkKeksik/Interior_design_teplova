import styled from "styled-components"

type TSectionBlack = { size?: "s" | "m" | "l" }

export const SectionBlack = styled.section<TSectionBlack>`
  height: ${({ size = "l" }) => {
    switch (size) {
      case "s":
        return "25vh"
      case "m":
        return "50vh"
      case "l":
        return "100vh"
    }
  }};
  background: ${({ theme }) => theme.main.background_black};
`
