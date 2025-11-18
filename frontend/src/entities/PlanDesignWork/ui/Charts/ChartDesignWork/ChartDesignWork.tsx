import type { FC } from "react"

import { MockDataDesignWork } from "@entities/PlanDesignWork/config"
import { ChartGantt } from "@shared/ui"

const ChartDesignWork: FC = () => {
  return <ChartGantt data_tasks={MockDataDesignWork} />
}

export default ChartDesignWork
