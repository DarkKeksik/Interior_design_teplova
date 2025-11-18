import type { FC } from "react"

import { MockDataEngineeringSystems } from "@entities/PlanDesignWork/config"
import { ChartGantt } from "@shared/ui"

const ChartEngineeringSystems: FC = () => {
  return <ChartGantt data_tasks={MockDataEngineeringSystems} />
}

export default ChartEngineeringSystems
