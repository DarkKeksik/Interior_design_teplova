import type { FC } from "react"

import Icons from "../Icons"
import * as Styled from "./SocialNetworks.styled"

const SocialNetworks: FC = () => {
  return (
    <Styled.Wrap>
      <Icons.IconTelegram />
      <Icons.IconInstagram />
      <Icons.IconWhatsUp />
    </Styled.Wrap>
  )
}

export default SocialNetworks
