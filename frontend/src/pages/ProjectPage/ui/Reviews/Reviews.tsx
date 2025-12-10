import type { FC } from "react"

import { Button } from "@shared/ui"

import * as Styled from "./Reviews.styled"
import { Style } from "maplibre-gl"

const Reviews: FC = () => {
  return (
    <Styled.Reviews>
      <Styled.WrapBlock>
        <Styled.Title>Отзывы проекта</Styled.Title>
        <Styled.ReviewList>
          <Styled.Review>
            <Styled.Header>
              <Styled.Name>Оксана</Styled.Name>
              <Styled.Date>09.10.25</Styled.Date>
            </Styled.Header>
            <Styled.Content>
              Выглядит замечательно, скажите, а у мы можем сделать похожее для моего дома? Отправила
              вам заявку на почту, спасибо!
            </Styled.Content>
          </Styled.Review>

          <Styled.Review>
            <Styled.Header>
              <Styled.Name>Андрей</Styled.Name>
              <Styled.Date>09.11.25</Styled.Date>
            </Styled.Header>
            <Styled.Content>Это проект моего дома, спасибо Елена!</Styled.Content>
          </Styled.Review>
        </Styled.ReviewList>
      </Styled.WrapBlock>

      <Styled.WrapBlock>
        <Styled.FormReview>
          <Styled.Input placeholder="Имя" />
          <Styled.Input placeholder="Email" />
          <Styled.InputText placeholder="Ваши мысли по проекту" />
          <Styled.ButtonSubmit as={Button} text="Отправить" />
        </Styled.FormReview>
      </Styled.WrapBlock>
    </Styled.Reviews>
  )
}

export default Reviews
