import type { FC } from "react"
import { useEffect, useRef, useState } from "react"

import { Gantt, Task, ViewMode } from "gantt-task-react"
import "gantt-task-react/dist/index.css"

import { CustomRow, CustomColumns } from "./ui"
import { dataMock, dataHeader } from "./config"
import * as Styled from "./ChartGantt.styled"

type TChartGantt = {
  data_tasks?: Task[]
}

const ChartGantt: FC<TChartGantt> = ({ data_tasks = dataMock, ...props }) => {
  const refHeaderChartGantt = useRef(null)
  const refContentChart = useRef(null)

  const [widthCol, setWidthCol] = useState(10)
  const [countRows, setCountRows] = useState(0)

  useEffect(() => {
    if (refHeaderChartGantt.current) {
      setWidthCol(refHeaderChartGantt?.current.offsetWidth / 14)
    }
  }, [refHeaderChartGantt.current])

  useEffect(() => {
    if (refContentChart.current) {
      const countRows = refContentChart.current.getElementsByClassName("bar")[0].children.length

      if (countRows != 0) {
        setCountRows(countRows)
      }
    }
  }, [refContentChart.current])

  return (
    <Styled.ChartGantt widthCol={widthCol}>
      <Styled.ChartHeaderCustom ref={refHeaderChartGantt}>
        {dataHeader.map((item) => (
          <Styled.Mount>{item}</Styled.Mount>
        ))}
      </Styled.ChartHeaderCustom>

      <Styled.ChartColsRowsCustom ref={refContentChart}>
        <Styled.RowsCustom>
          {new Array(countRows).fill(
            <CustomRow>
              <CustomColumns />
              <CustomColumns />
              <CustomColumns />
              <CustomColumns />
            </CustomRow>
          )}
        </Styled.RowsCustom>

        <Gantt
          viewMode={ViewMode.Month}
          locale="ru"
          tasks={data_tasks}
          columnWidth={widthCol}
          barFill={25}
          rowHeight={40}
          barProgressColor="#CBA35C"
          milestoneBackgroundColor="#CBA35C"
          TaskListHeader={() => null}
          TaskListTable={() => null}
          TooltipContent={() => null}
          headerHeight={50}
          {...props}
        />
      </Styled.ChartColsRowsCustom>
    </Styled.ChartGantt>
  )
}

export default ChartGantt
