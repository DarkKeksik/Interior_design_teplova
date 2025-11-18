import type { FC } from "react"
import * as Styled from "./ChartFinishingWork.styled"

import { MockDataFinishingWork } from "@entities/PlanDesignWork/config"
import { ChartGantt } from "@shared/ui"

const ChartFinishingWork: FC = () => {
  return <Styled.Wrap as={ChartGantt} data_tasks={MockDataFinishingWork} />
}

export default ChartFinishingWork
