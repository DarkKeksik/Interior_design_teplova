import type { FC } from "react"

import { projectInformation } from "@pages/ProjectPage/config/data"

import * as Styled from "./ProjectInformation.styled"

const ProjectInformation: FC = () => {
  return (
    <Styled.ProjectInformation>
      <Styled.Title>Светлая кухня в ЖК сахарный ключ</Styled.Title>

      <Styled.DescriptionBlock>
        {projectInformation.map(({ icon, name, value }, id) => (
          <Styled.DescriptionItem key={id}>
            <Styled.DescriptionIcon as={icon} />

            <Styled.Info>
              <Styled.InfoName>{name}</Styled.InfoName>
              <Styled.InfoValue>{value}</Styled.InfoValue>
            </Styled.Info>
          </Styled.DescriptionItem>
        ))}
      </Styled.DescriptionBlock>

      <Styled.TextDescription>
        Вся сантехника подобранна dom apex, керамогранит стена, пол - PAMESA MANAOS DARK 600x1200mm
        кастомная раковина с щелевым изливом XLight XTone Urbatek, aged dark nature 1020x2500mm.
      </Styled.TextDescription>
    </Styled.ProjectInformation>
  )
}

export default ProjectInformation
