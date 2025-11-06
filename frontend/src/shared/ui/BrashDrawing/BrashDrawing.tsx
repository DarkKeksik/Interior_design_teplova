import type { FC } from "react"
import { useState, useEffect, useRef } from "react"

// @ts-ignore
import BrashIcon from "./brush.svg?react"

import * as Styled from "./BrashDrawing.styled"

const configDrawingBlock = {
  minPageSize: 0,
  maxPageSize: 345,
  minAngleSlope: -30.0,
  maxAngleSlope: 30.0,
}

const calcPercentageFromNumber = (number: number) => {
  return Math.floor((number * 100) / configDrawingBlock.maxPageSize)
}

const BrashDrawing: FC = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    // return window.removeEventListener("scroll", handleScroll)
  }, [])

  const configDrawingBlock = {
    minPageSize: 0,
    maxPageSize: 345,
    minAngleSlope: -30.0,
    maxAngleSlope: 30.0,
    speedAngleChange: 2,
  }

  const [brashDegree, setBrashDegree] = useState(configDrawingBlock.minAngleSlope)
  const [widthDrawingBlock, setWidthDrawingBlock] = useState(configDrawingBlock.minPageSize)
  const directionRef = useRef(1)

  const calcAngleSlopeBrash = () => {
    setBrashDegree((prev) => {
      const next = prev + directionRef.current

      if (next >= configDrawingBlock.maxAngleSlope) {
        directionRef.current = -1 / configDrawingBlock.speedAngleChange
        return configDrawingBlock.maxAngleSlope
      }

      if (next <= configDrawingBlock.minAngleSlope) {
        directionRef.current = 1 / configDrawingBlock.speedAngleChange
        return configDrawingBlock.minAngleSlope
      }

      return next
    })
  }

  const handleScroll = () => {
    const position = window.pageYOffset
    let percentComplited = calcPercentageFromNumber(position)

    calcAngleSlopeBrash()
    setWidthDrawingBlock(percentComplited)
  }

  return (
    <Styled.Wrap>
      <Styled.DrawingBlock style={{ transform: `translate(-${100 - widthDrawingBlock}%)` }}>
        <Styled.BrashIcon
          as={BrashIcon}
          stroke="#1B1B1B"
          height={80}
          width={80}
          style={{ transform: `translate(calc(100% + 30px), -15px) rotate(${brashDegree}deg)` }}
        />
      </Styled.DrawingBlock>
    </Styled.Wrap>
  )
}

export default BrashDrawing
