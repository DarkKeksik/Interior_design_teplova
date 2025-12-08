import type { FC } from "react"

import { Link } from "react-router-dom"

import { Button } from "@shared/ui"

import { SliderCude } from "../"
import * as Styled from "./ProjectItem.styled"

type TProjectItem = {
  title: string
  description: string
  images: string[]
}

const ProjectItem: FC<TProjectItem> = ({ title, description, images }) => {
  return (
    <Styled.ProjectItem>
      <Styled.ContentText>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>

        <Styled.ProjectInfo>
          <Styled.InfoItem>
            <Styled.TitleInfoItem>Стоимость проекта</Styled.TitleInfoItem>
            <Styled.ValueInfoItem>2 500 000 ₽</Styled.ValueInfoItem>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.TitleInfoItem>Срок реализации</Styled.TitleInfoItem>
            <Styled.ValueInfoItem>2 года и 3 мес</Styled.ValueInfoItem>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.TitleInfoItem>Размеры проекта</Styled.TitleInfoItem>
            <Styled.ValueInfoItem>26 м²</Styled.ValueInfoItem>
          </Styled.InfoItem>
        </Styled.ProjectInfo>

        <Styled.Panel>
          <Link to="/projects/1">
            <Styled.Button as={Button}>Подробней</Styled.Button>
          </Link>
        </Styled.Panel>
      </Styled.ContentText>

      <Styled.ContentImages>
        <SliderCude images={images} />
      </Styled.ContentImages>
    </Styled.ProjectItem>
  )
}

export default ProjectItem
