import type { FC, PropsWithChildren } from "react"
import * as Styled from "./PageWithLayouts.styled"

import { Navigation } from "@shared/ui"

const PageWithLayouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Styled.Header>
        <Navigation />
      </Styled.Header>
      <main>{children}</main>
    </>
  )
}

export default PageWithLayouts
