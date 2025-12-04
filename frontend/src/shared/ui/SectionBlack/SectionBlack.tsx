import type { FC, PropsWithChildren } from "react"
import * as Styled from "./SectionBlack.styled"

type TSectionBlack = {
  typeBg?: "black" | "blackExtra"
  isPadding?: boolean
} & PropsWithChildren

const SectionBlack: FC<TSectionBlack> = ({
  children,
  typeBg = "black",
  isPadding = true,
  ...props
}) => {
  return (
    <Styled.SectionBlack typeBg={typeBg} isPadding={isPadding} {...props}>
      {children}
    </Styled.SectionBlack>
  )
}

export default SectionBlack
