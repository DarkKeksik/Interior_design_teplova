import type { FC } from "react"

import { ButtonModal } from "../"

import * as Styled from "./FeedbackBlock.styled"

const FeedbackBlock: FC = () => {
  return (
    <Styled.FeedbackBlock>
      <ButtonModal />
    </Styled.FeedbackBlock>
  )
}

export default FeedbackBlock
