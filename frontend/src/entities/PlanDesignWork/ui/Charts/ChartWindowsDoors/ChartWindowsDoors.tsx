import type { FC } from "react"

import { MockDataWindowsDoors } from "@entities/PlanDesignWork/config"
import { ChartGantt } from "@shared/ui"

const ChartWindowsDoors: FC = () => {
  return <ChartGantt data_tasks={MockDataWindowsDoors} />
}

export default ChartWindowsDoors
