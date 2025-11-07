import type { FC } from "react"

import { InputPhone, SocialNetworks, Button } from "@shared/ui"
import * as Styled from "./RequestProjectBlock.styled"

export const RequestProjectBlock: FC = () => {
  return (
    <Styled.RequestProjectBlock>
      <Styled.Title>
        <span>Обсудим ваш</span>
        <Styled.Title_extra>будущий проект?</Styled.Title_extra>
      </Styled.Title>
      <Styled.Form>
        <InputPhone />
        <Button text="Отправить" />
      </Styled.Form>
      <SocialNetworks />
    </Styled.RequestProjectBlock>
  )
}

export default RequestProjectBlock
