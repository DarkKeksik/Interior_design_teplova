import type { PropsWithChildren, FC } from "react"

import * as Styled from "./Headline.styled"

const Headline: FC<PropsWithChildren> = ({ children }) => {
  return <Styled.Headline>{children}</Styled.Headline>
}

export default Headline
