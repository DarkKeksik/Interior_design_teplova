import type { FC } from "react"

import { TitleSection, BrashDrawing, SectionBlack } from "@shared/ui"

import { TabsPanel } from "../"
import * as Styled from "./PlanDesignWork.styled"

const PlanDesignWork: FC = () => {
  return (
    <>
      <BrashDrawing minPageSize={1700} maxPageSize={1800} />
      <Styled.SectionBlack as={SectionBlack} typeBg="blackExtra">
        <TitleSection isAlignRight>Производство интерьера от договора до въезда</TitleSection>
        <TabsPanel />
      </Styled.SectionBlack>
    </>
  )
}

export default PlanDesignWork
