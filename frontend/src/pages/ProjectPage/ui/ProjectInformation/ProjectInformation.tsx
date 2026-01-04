import type { FC } from "react"
import { useMemo } from "react"

import type { TProjectInfo } from "@shared/api"
import { projectInformation } from "@pages/ProjectPage/config/data"

import * as Styled from "./ProjectInformation.styled"

const ProjectInformation: FC<TProjectInfo> = ({
  title,
  description,
  costProject,
  totalArea,
  implementationPeriod,
  completionYear,
}) => {
  const detailsProjectBackend = useMemo(() => {
    return [
      {
        icon: projectInformation[0].icon,
        name: projectInformation[0].name,
        value: costProject,
      },
      {
        icon: projectInformation[1].icon,
        name: projectInformation[1].name,
        value: `${totalArea} м² `,
      },
      {
        icon: projectInformation[2].icon,
        name: projectInformation[2].name,
        value: completionYear,
      },
      {
        icon: projectInformation[3].icon,
        name: projectInformation[3].name,
        value: implementationPeriod,
      },
    ]
  }, [costProject, totalArea, implementationPeriod, completionYear])

  return (
    <Styled.ProjectInformation>
      <Styled.Title>{title}</Styled.Title>

      <Styled.DescriptionBlock>
        {detailsProjectBackend.map(({ icon, name, value }, id) => (
          <Styled.DescriptionItem key={id}>
            <Styled.DescriptionIcon as={icon} />

            <Styled.Info>
              <Styled.InfoName>{name}</Styled.InfoName>
              <Styled.InfoValue>{value}</Styled.InfoValue>
            </Styled.Info>
          </Styled.DescriptionItem>
        ))}
      </Styled.DescriptionBlock>

      <Styled.TextDescription>{description}</Styled.TextDescription>
    </Styled.ProjectInformation>
  )
}

export default ProjectInformation
