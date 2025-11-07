import type { FC, PropsWithChildren } from "react"

import { Header, Footer } from "@features/index"

const PageWithLayouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PageWithLayouts
