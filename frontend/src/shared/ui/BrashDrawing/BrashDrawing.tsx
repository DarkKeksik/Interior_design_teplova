import type { FC } from "react"
import { useState, useEffect, useRef } from "react"

// @ts-ignore
import BrashIcon from "./brush.svg?react"

import * as Styled from "./BrashDrawing.styled"

const configDrawingBlock = {
  minPageSize: 0,
  maxPageSize: 600,
  minAngleSlope: -30.0,
  maxAngleSlope: 30.0,
  speedAngleChange: 2,
}

const calcPercentageFromNumber = (number: number) => {
  return Math.floor((number * 100) / configDrawingBlock.maxPageSize)
}

const BrashDrawing: FC = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    // return window.removeEventListener("scroll", handleScroll)
  }, [])

  const [widthDrawingBlock, setWidthDrawingBlock] = useState(configDrawingBlock.minPageSize)

  const handleScroll = () => {
    const position = window.pageYOffset
    let percentComplited = calcPercentageFromNumber(position)

    setWidthDrawingBlock(percentComplited)
  }

  return (
    <Styled.Wrap>
      <Styled.DrawingBlock style={{ transform: `translate(-${100 - widthDrawingBlock}%)` }}>
        <Styled.BrashIcon as={BrashIcon} stroke="#1B1B1B" />
      </Styled.DrawingBlock>
    </Styled.Wrap>
  )
}

export default BrashDrawing
