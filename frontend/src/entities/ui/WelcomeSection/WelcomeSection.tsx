import type { FC } from "react"

import * as Styled from "./WelcomeSection.styled"

import { SectionBlack, Headline, Model3DCurcle } from "@shared/ui"

const WelcomeSection: FC = () => {
  return (
    <SectionBlack>
      <Styled.Content>
        <Styled.WrapModel3DCurcle>
          <Model3DCurcle />
        </Styled.WrapModel3DCurcle>
        <Styled.Texts>
          <Headline>design & architecture</Headline>
          <Styled.Description>
            Воплощение Ваших смелых идей, для комфортной жизни
          </Styled.Description>
        </Styled.Texts>
      </Styled.Content>
    </SectionBlack>
  )
}

export default WelcomeSection
