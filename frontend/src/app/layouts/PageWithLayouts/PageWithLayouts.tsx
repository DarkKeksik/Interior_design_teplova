import type { FC, PropsWithChildren } from "react"

import * as Styled from "./PageWithLayouts.styled"

import { Header, Footer } from "@features/index"

const PageWithLayouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
    </>
  )
}

export default PageWithLayouts
