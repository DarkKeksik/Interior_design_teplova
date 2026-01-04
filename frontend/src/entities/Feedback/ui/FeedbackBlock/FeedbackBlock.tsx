import type { FC } from "react"
import { useState } from "react"

import { ButtonModal } from "../"

import * as Styled from "./FeedbackBlock.styled"
import { ContactUsModal } from "../ContactUsModal"

const FeedbackBlock: FC = () => {
  const [handleVisibility, setHandleVisibility] = useState(false)

  return (
    <Styled.FeedbackBlock>
      <ButtonModal onClick={() => setHandleVisibility(true)} />
      <ContactUsModal isOpen={handleVisibility} onClose={setHandleVisibility} />
    </Styled.FeedbackBlock>
  )
}

export default FeedbackBlock
