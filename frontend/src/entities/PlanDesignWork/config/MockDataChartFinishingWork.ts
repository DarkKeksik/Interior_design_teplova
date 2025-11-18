import { Task } from "gantt-task-react"

const DataMock: Task[] = [
  {
    start: new Date(2025, 1, 1),
    end: new Date(2025, 1, 15),
    name: "Демонтаж перегородок",
    id: "Task 0",
    type: "task",
    progress: 50,
    isDisabled: true,
  },
  {
    start: new Date(2025, 3, 15),
    end: new Date(2025, 4, 1),
    name: "Демонтаж перегородок",
    id: "Task 0",
    type: "task",
    progress: 100,
    isDisabled: true,
  },
  {
    start: new Date(2025, 4, 1),
    end: new Date(2025, 4, 15),
    name: "Монтаж перегородок",
    id: "Task 0",
    type: "task",
    progress: 100,
    isDisabled: true,
  },
  {
    start: new Date(2025, 5, 1),
    end: new Date(2025, 5, 15),
    name: "Грунтование стен",
    id: "Task 0",
    type: "task",
    progress: 20,
    isDisabled: true,
  },
  {
    start: new Date(2025, 6, 15),
    end: new Date(2025, 7, 1),
    name: "Грунтование стен",
    id: "Task 0",
    type: "task",
    progress: 40,
    isDisabled: true,
  },
]

export default DataMock
