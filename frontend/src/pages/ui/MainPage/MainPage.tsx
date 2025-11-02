import type { FC } from "react"

import * as Styled from "./MainPage.styled"

import { WelcomeSection } from "@entities/index"

const MainPage: FC = () => {
  return (
    <Styled.Wrap>
      <WelcomeSection />
    </Styled.Wrap>
  )
}

export default MainPage
