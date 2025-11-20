import { FC, Suspense } from "react"

import * as Styled from "./WelcomeSection.styled.ts"

import { SectionBlack, Headline, Model3DCurcle } from "@shared/ui"
import { ThreeModelSkeleton } from "@entities/WelcomeSection/ui/ThreeModelSkeleton"

const WelcomeSection: FC = () => {
  return (
    <SectionBlack>
      <Styled.Content>
        <Styled.WrapModel3DCurcle>
          <Suspense fallback={<ThreeModelSkeleton />}>
            <Model3DCurcle />
          </Suspense>
        </Styled.WrapModel3DCurcle>
        <Styled.Texts>
          <Headline>Minimalistic & Beautiful</Headline>
          <Styled.Description>
            Воплощение Ваших смелых идей, для комфортной жизни
          </Styled.Description>
        </Styled.Texts>
      </Styled.Content>
    </SectionBlack>
  )
}

export default WelcomeSection
