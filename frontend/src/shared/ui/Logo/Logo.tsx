import type { FC } from "react"
import { Link } from "react-router-dom"

import { linksPages } from "@shared/config"

import * as Styled from "./Logo.styled"

const Logo: FC = (props) => {
  return (
    <Styled.Logo {...props}>
      <Link to={linksPages.page_main.link}>teplova-art</Link>
    </Styled.Logo>
  )
}

export default Logo
