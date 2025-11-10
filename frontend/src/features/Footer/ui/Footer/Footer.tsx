import type { FC } from "react"

import { Logo, SocialNetworks } from "@shared/ui"

import * as Styled from "./Footer.styled"

const Footer: FC = () => {
  return (
    <Styled.Footer>
      <Styled.Description>
        <Styled.LogoFooter as={Logo} />
        <Styled.Wrap>
          <Styled.CopyrightNotice>© «teplova-art», 2025</Styled.CopyrightNotice>
          <SocialNetworks />
        </Styled.Wrap>
      </Styled.Description>
    </Styled.Footer>
  )
}

export default Footer
