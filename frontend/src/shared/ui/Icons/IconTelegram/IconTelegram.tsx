import type { FC } from "react"

import Icon from "./telegram.svg?react"

import * as Styled from "./IconTelegram.styled"

const IconTelegram: FC = () => {
  return (
    <Styled.IconWrap>
      <Icon width="1.8rem" height="1.8rem" stroke="white" />
    </Styled.IconWrap>
  )
}

export default IconTelegram
