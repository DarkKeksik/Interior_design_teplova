import type { FC } from "react"
import { useState, useEffect, useMemo } from "react"

// @ts-ignore
import BrashIcon from "./brush.svg?react"

import * as Styled from "./BrashDrawing.styled"

const calcPercentageFromNumber = (number: number, maxPageSize: number) => {
  return Math.floor((number * 100) / maxPageSize)
}

type TBrashDrawing = {
  minPageSize?: number
  maxPageSize?: number
  leftToRight?: boolean
}

const BrashDrawing: FC<TBrashDrawing> = ({ minPageSize = 0, maxPageSize = 600, leftToRight }) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
  }, [])

  const configDrawingBlock = useMemo(() => {
    return {
      minPageSize: minPageSize,
      maxPageSize: maxPageSize,
    }
  }, [minPageSize, maxPageSize])

  const [widthDrawingBlock, setWidthDrawingBlock] = useState(configDrawingBlock.minPageSize)

  const handleScroll = () => {
    const position = window.pageYOffset
    let percentComplited = calcPercentageFromNumber(position, configDrawingBlock.maxPageSize)

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
