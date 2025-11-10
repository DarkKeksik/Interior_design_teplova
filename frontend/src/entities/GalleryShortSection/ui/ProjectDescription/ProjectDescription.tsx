import type { FC } from "react"

import { Link } from "react-router-dom"

import { Icons } from "@shared/ui"

import * as Styled from "./ProjectDescription.styled"

type TProjectDescription = {
  isDescription?: boolean
}

export const ProjectDescription: FC<TProjectDescription> = ({ isDescription = true }) => {
  return (
    <Styled.Wrap>
      <Styled.Background />
      <Styled.Content>
        <Styled.Title>Светлая кухня в ЖК сахарный ключ</Styled.Title>

        {isDescription && (
          <Styled.Description>
            Вся сантехника подобранна dom apex, керамогранит стена, пол - PAMESA MANAOS DARK
            600x1200mm кастомная раковина с щелевым изливом XLight XTone Urbatek, aged dark nature
            1020x2500mm.
          </Styled.Description>
        )}

        <Styled.WrapRight>
          <Styled.ButtonCustom as={Link} to={"/project/1"}>
            О проекте <Icons.IconArrowRight />
          </Styled.ButtonCustom>
        </Styled.WrapRight>
      </Styled.Content>
    </Styled.Wrap>
  )
}

export default ProjectDescription
