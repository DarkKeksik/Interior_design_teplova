import type { FC } from "react"

import { Link } from "react-router-dom"

import type { TProjectInfo } from "@shared/api"
import { Button } from "@shared/ui"

import { SliderCude } from "../"
import * as Styled from "./ProjectItem.styled"

const ProjectItem: FC<TProjectInfo> = ({
  title,
  description,
  images = [],
  costProject,
  totalArea,
  implementationPeriod,
  slug,
  completionYear,
}) => {
  return (
    <Styled.ProjectItem>
      <Styled.ContentText>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>

        <Styled.ProjectInfo>
          <Styled.InfoItem>
            <Styled.TitleInfoItem>Год сдачи</Styled.TitleInfoItem>
            <Styled.ValueInfoItem>{completionYear}</Styled.ValueInfoItem>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.TitleInfoItem>Стоимость проекта</Styled.TitleInfoItem>
            <Styled.ValueInfoItem>{costProject} ₽</Styled.ValueInfoItem>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.TitleInfoItem>Срок реализации</Styled.TitleInfoItem>
            <Styled.ValueInfoItem>{implementationPeriod}</Styled.ValueInfoItem>
          </Styled.InfoItem>
          <Styled.InfoItem>
            <Styled.TitleInfoItem>Размеры проекта</Styled.TitleInfoItem>
            <Styled.ValueInfoItem>{totalArea} м²</Styled.ValueInfoItem>
          </Styled.InfoItem>
        </Styled.ProjectInfo>

        <Styled.Panel>
          <Link to={`/projects/${slug}`}>
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
