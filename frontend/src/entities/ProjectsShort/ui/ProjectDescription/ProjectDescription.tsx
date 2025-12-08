// @ts-expect-error Wrong types for new Component (Activity) 19.2
import { Activity } from "react"
import type { FC } from "react"

import { Link } from "react-router-dom"

import { linksPages } from "@shared/config"
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

        <Activity mode={isDescription ? "visible" : "hidden"}>
          <Styled.Description>
            Вся сантехника подобранна dom apex, керамогранит стена, пол - PAMESA MANAOS DARK
            600x1200mm кастомная раковина с щелевым изливом XLight XTone Urbatek, aged dark nature
            1020x2500mm.
          </Styled.Description>
        </Activity>

        <Styled.WrapRight>
          <Styled.ButtonCustom as={Link} to={`${linksPages.page_projects.link}/1`}>
            О проекте <Icons.IconArrowRight />
          </Styled.ButtonCustom>
        </Styled.WrapRight>
      </Styled.Content>
    </Styled.Wrap>
  )
}

export default ProjectDescription
