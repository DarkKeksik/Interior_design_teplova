import styled from "styled-components"

type TSectionBlack = {
  size?: "s" | "m" | "l"
  typeBg: "black" | "blackExtra"
  isPadding: boolean
}

export const SectionBlack = styled.section<TSectionBlack>`
  padding: ${({ isPadding }) => (isPadding ? "4rem 2rem;" : 0)};

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

  background: ${({ theme, typeBg }) => {
    if (typeBg == "blackExtra") {
      return theme.main.background_black_extra
    }

    return theme.main.background_black
  }};
`
