import type { FC } from "react"

import Icon from "./whatsapp.svg?react"

import * as Styled from "./IconWhatsUp.styled"

const IconWhatsUp: FC = () => {
  return (
    <Styled.IconWrap>
      <Styled.Icon as={Icon} width="1.8rem" height="1.8rem" fill="white" />
    </Styled.IconWrap>
  )
}

export default IconWhatsUp
