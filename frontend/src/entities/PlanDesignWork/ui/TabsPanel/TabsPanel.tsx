import type { FC } from "react"
import { useState, useMemo } from "react"

import { tabPanelData } from "@entities/PlanDesignWork/config"

import * as Styled from "./TabsPanel.styled"

const setTabActive = ({ tabsData, selectedTabId }: any) => {
  let newData = tabsData

  newData = newData.map((item: any) => {
    if (item.idTab === selectedTabId) {
      return { ...item, isActive: true }
    }

    return { ...item, isActive: false }
  })

  return newData
}

const TabsPanel: FC = () => {
  const [tabItems, setTabItems] = useState(
    setTabActive({ tabsData: tabPanelData, selectedTabId: "designWork" })
  )

  const getIsActiveChart = () => {
    let arrIsActive = tabItems.filter(({ isActive }: any) => isActive)

    return arrIsActive[0].Chart
  }

  const ActiveChart = useMemo(() => {
    return getIsActiveChart()
  }, [tabItems])

  return (
    <Styled.Wrap>
      <Styled.WrapTab>
        <Styled.Subtite>План работ</Styled.Subtite>
        <Styled.Tab>
          {tabItems.map(({ titleTab, isActive, idTab }) => (
            <Styled.TabItem
              isActive={isActive}
              key={idTab}
              onClick={() => {
                setTabItems((prev) =>
                  setTabActive({ tabsData: tabPanelData, selectedTabId: idTab })
                )
              }}
            >
              {titleTab}
            </Styled.TabItem>
          ))}
        </Styled.Tab>
      </Styled.WrapTab>
      <ActiveChart />
    </Styled.Wrap>
  )
}

export default TabsPanel
