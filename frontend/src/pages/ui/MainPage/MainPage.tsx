import type { FC } from "react"

import * as Styled from "./MainPage.styled"

import { GallerySection, WelcomeSection } from "@entities/index"

const MainPage: FC = () => {
  return (
    <Styled.Wrap>
      <WelcomeSection />
      <GallerySection />
    </Styled.Wrap>
  )
}

export default MainPage
