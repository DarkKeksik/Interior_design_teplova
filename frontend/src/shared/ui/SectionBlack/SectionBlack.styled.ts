import styled from "styled-components"

type TSectionBlack = { size?: "s" | "m" | "l" }

export const SectionBlack = styled.section<TSectionBlack>`
  min-height: calc(
    ${({ size = "l" }) => {
        switch (size) {
          case "s":
            return "25vh"
          case "m":
            return "50vh"
          case "l":
            return "100vh"
        }
      }} -
      50px
  );
  background: ${({ theme }) => theme.main.background_black};
`
