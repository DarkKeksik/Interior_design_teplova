import type { FC, PropsWithChildren } from "react"

import { Header } from "@features/Header"

const PageWithLayouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default PageWithLayouts
