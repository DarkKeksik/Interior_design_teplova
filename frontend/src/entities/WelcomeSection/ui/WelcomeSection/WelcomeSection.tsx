import type { FC } from "react"

import { SectionBlack, Headline } from "@shared/ui"

import { BackgroundVideo } from "../"
import * as Styled from "./WelcomeSection.styled.ts"

const WelcomeSection: FC = () => {
  return (
    <Styled.WelcomeSection as={SectionBlack} isPadding={false}>
      <BackgroundVideo />
      <Styled.BackgroundDark />

      <Styled.Content>
        <Styled.Texts>
          <Headline>дизайн интерьеров</Headline>
          <Styled.Description>
            Воплощение Ваших смелых идей, для комфортной жизни
          </Styled.Description>
        </Styled.Texts>
      </Styled.Content>
    </Styled.WelcomeSection>
  )
}

export default WelcomeSection
