import type { FC } from "react"

import { Menu, Logo, MobileMenu } from "@shared/ui"
import { FeedbackBlock } from "@entities/index"

import * as Styled from "./Header.styled"

const Header: FC = () => {
  return (
    <Styled.Header>
      <Menu />
      <Logo />
      <FeedbackBlock />
      <MobileMenu />
    </Styled.Header>
  )
}

export default Header
