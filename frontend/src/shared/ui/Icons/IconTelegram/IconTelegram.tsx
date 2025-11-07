import type { FC } from "react"

import Icon from "./telegram.svg?react"

import * as Styled from "./IconTelegram.styled"

const IconTelegram: FC = () => {
  return (
    <Styled.IconWrap>
      <Styled.Icon as={Icon} width="1.8rem" height="1.8rem" stroke="#FFFFF0" />
    </Styled.IconWrap>
  )
}

export default IconTelegram
