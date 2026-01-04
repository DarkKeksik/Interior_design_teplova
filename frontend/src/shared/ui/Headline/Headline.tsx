import type { PropsWithChildren, FC } from "react"

import * as Styled from "./Headline.styled"

type THeadline = {
  size?: "s" | "m" | "l"
} & PropsWithChildren

const Headline: FC<THeadline> = ({ children, size = "l" }) => {
  return <Styled.Headline size={size}>{children}</Styled.Headline>
}

export default Headline
