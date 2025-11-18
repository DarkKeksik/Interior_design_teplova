import { Charts } from "../ui"

const tabPanelData = [
  {
    titleTab: "Проектные работы",
    idTab: "designWork",
    isActive: false,
    Chart: () => <Charts.ChartDesignWork />,
  },
  {
    titleTab: "Отделочные работы",
    idTab: "finishingWork",
    isActive: false,
    Chart: () => <Charts.ChartFinishingWork />,
  },
  {
    titleTab: "Инженерные системы",
    idTab: "engineeringSystems",
    isActive: false,
    Chart: () => <Charts.ChartEngineeringSystems />,
  },
  {
    titleTab: "Окна и двери",
    idTab: "windowsDoors",
    isActive: false,
    Chart: () => <Charts.ChartWindowsDoors />,
  },
  {
    titleTab: "Мебель и техника",
    idTab: "furnitureAppliances",
    isActive: false,
    Chart: () => <Charts.ChartFurnitureAppliances />,
  },
]

export default tabPanelData
