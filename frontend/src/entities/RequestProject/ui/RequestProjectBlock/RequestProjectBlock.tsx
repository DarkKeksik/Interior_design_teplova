import type { FC } from "react"

import { InputPhone } from "@shared/ui"
import * as Styled from "./RequestProjectBlock.styled"

export const RequestProjectBlock: FC = () => {
  return (
    <Styled.RequestProjectBlock>
      <Styled.Title>
        <span>Обсудим ваш</span>
        <Styled.Title_extra>будущий проект?</Styled.Title_extra>
      </Styled.Title>
      <InputPhone />
    </Styled.RequestProjectBlock>
  )
}

export default RequestProjectBlock
