import type { FC, PropsWithChildren } from "react"

import * as Styled from "./CustomColumns.styled"

export const CustomColumns: FC<PropsWithChildren> = ({ children }) => {
  return <Styled.CustomColumns>{children}</Styled.CustomColumns>
}

export default CustomColumns
