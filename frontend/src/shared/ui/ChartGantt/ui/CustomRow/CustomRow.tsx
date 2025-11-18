import type { FC, PropsWithChildren } from "react"

import * as Styled from "./CustomRow.styled"

export const CustomRow: FC<PropsWithChildren> = ({ children }) => {
  return <Styled.CustomRow>{children}</Styled.CustomRow>
}

export default CustomRow
