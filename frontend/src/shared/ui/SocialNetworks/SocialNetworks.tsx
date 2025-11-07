import type { FC } from "react"
import { Link } from "react-router-dom"

import Icons from "../Icons"
import * as Styled from "./SocialNetworks.styled"

const links = {
  telegram: "",
  instagram: "",
  whatsUp: "",
}

const SocialNetworks: FC = () => {
  return (
    <Styled.Wrap>
      <Link to={links.telegram} target="_blank">
        <Icons.IconTelegram />
      </Link>

      <Link to={links.instagram} target="_blank">
        <Icons.IconInstagram />
      </Link>

      <Link to={links.whatsUp} target="_blank">
        <Icons.IconWhatsUp />
      </Link>
    </Styled.Wrap>
  )
}

export default SocialNetworks
