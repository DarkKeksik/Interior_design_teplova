import { FC, useState } from "react"

import { ButtonModal } from "../"

import * as Styled from "./FeedbackBlock.styled"
import { ContactUsModal } from "./ui/ContactUsModal"

const FeedbackBlock: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleVisibility = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Styled.FeedbackBlock>
      <ButtonModal onClick={toggleVisibility} />
      <ContactUsModal isOpen={isOpen} onClose={toggleVisibility} />
    </Styled.FeedbackBlock>
  )
}

export default FeedbackBlock
