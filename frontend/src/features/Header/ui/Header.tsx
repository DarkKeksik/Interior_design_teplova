import type { FC } from "react"

import { Menu, Logo } from "@shared/ui"
import { FeedbackBlock } from "@entities/index"

import * as Styled from "./Header.styled"

const Header: FC = () => {
  return (
    <Styled.Header>
      <Menu />
      <Logo />
      <FeedbackBlock />
    </Styled.Header>
  )
}

export default Header
