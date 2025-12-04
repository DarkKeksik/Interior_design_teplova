import type { FC } from "react"

import { InputPhone, Button } from "@shared/ui"

import * as Styled from "./BlockTextMe.styled"

const BlockTextMe: FC = () => {
  return (
    <Styled.Wrap>
      <Styled.Content>
        <Styled.Title>Оставьте заявку</Styled.Title>
        <Styled.SubTitle>Давайте пообщаемся по Вашему дизайн-проекту</Styled.SubTitle>
        <Styled.Form>
          <InputPhone />
          <Button text="Отправить" />
        </Styled.Form>
      </Styled.Content>
    </Styled.Wrap>
  )
}

export default BlockTextMe
