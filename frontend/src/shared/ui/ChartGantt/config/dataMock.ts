import type { Task } from "gantt-task-react"

let dataMock: Task[] = [
  {
    start: new Date(2025, 1, 1),
    end: new Date(2025, 2, 1),
    name: "Проектирование стен",
    id: "Task 0",
    type: "task",
    progress: 100,
    isDisabled: true,
  },
  {
    start: new Date(2025, 1, 1),
    end: new Date(2025, 2, 1),
    name: "Проектирование крыши",
    id: "Task 1",
    type: "task",
    progress: 45,
    isDisabled: true,
  },
]

export default dataMock
