import type { FC } from "react"

import { TitleSection } from "@shared/ui"

import { TabsPanel } from "../"
import * as Styled from "./PlanDesignWork.styled"

const PlanDesignWork: FC = () => {
  return (
    <Styled.SectionBlack>
      <TitleSection isBlack isAlignRight>
        Производство интерьера от договора до въезда
      </TitleSection>
      <TabsPanel />
    </Styled.SectionBlack>
  )
}

export default PlanDesignWork
