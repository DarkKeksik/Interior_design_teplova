import type { FC } from "react"

import Icon from "./instagram.svg?react"

import * as Styled from "./IconInstagram.styled"

const IconInstagram: FC = () => {
  return (
    <Styled.IconWrap>
      <Icon width="1.8rem" height="1.8rem" fill="white" />
    </Styled.IconWrap>
  )
}

export default IconInstagram
