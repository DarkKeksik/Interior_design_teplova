import type { FC, PropsWithChildren } from "react"
import * as Styled from "./SectionBlack.styled"

const SectionBlack: FC<PropsWithChildren> = ({ children }) => {
  return <Styled.SectionBlack>{children}</Styled.SectionBlack>
}

export default SectionBlack
