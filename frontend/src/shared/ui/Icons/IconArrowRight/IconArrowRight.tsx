import type { FC } from "react"

import Icon from "./IconArrowRight.svg?react"

import * as Styled from "./IconArrowRight.styled"

const IconArrowRight: FC = () => {
  return (
    <Styled.IconWrap>
      <Styled.Icon as={Icon} width="1.8rem" height="1.8rem" fill="#1b1b1b" />
    </Styled.IconWrap>
  )
}

export default IconArrowRight
