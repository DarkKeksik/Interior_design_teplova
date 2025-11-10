import type { FC } from "react"
import { useEffect, useRef } from "react"
import Gantt from "frappe-gantt"
import "./frappe-gantt_css_copy.css"

import * as Styled from "./Chart_gantt.styled"

let tasks = [
  {
    id: "1",
    name: "End this website",
    start: "2025-11-01",
    end: "2025-11-02",
    progress: 2,
  },
]

type TChart_gantt = {
  data_tasks?: { [keys: string]: string | number }
}

const Chart_gantt: FC<TChart_gantt> = () => {
  const ganttRef = useRef(null)
  const ganttInstance = useRef(null)

  useEffect(() => {
    if (!ganttRef.current) return

    if (!ganttInstance.current) {
      ganttInstance.current = new Gantt(ganttRef.current, tasks, {
        on_click: (task) => console.log("click", task),
        on_date_change: (task, start, end) => console.log("date changed", task, start, end),
        container_height: window.innerHeight - 200,
        bar_corner_radius: 5,
        bar_height: 8,
        column_width: 48,
        language: "ru",
      })
    } else {
      ganttInstance.current.refresh(tasks)
    }
  }, [tasks])

  return <Styled.Chart_gantt ref={ganttRef}></Styled.Chart_gantt>
}

export default Chart_gantt
