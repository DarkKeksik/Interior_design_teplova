// @ts-expect-error Wrong types for new Component (Activity) 19.2
import { Activity } from "react"
import type { FC } from "react"

import { Link } from "react-router-dom"

import { TProjectInfo } from "@shared/api"
import { linksPages } from "@shared/config"
import { Icons, Preloader } from "@shared/ui"

import * as Styled from "./ProjectDescription.styled"

type TProjectDescription = {
  isDescription?: boolean
  isLoading: boolean
  isVisible?: boolean
} & TProjectInfo

export const ProjectDescription: FC<TProjectDescription> = ({
  isVisible = false,
  isDescription = true,
  title,
  description,
  isLoading,
  slug,
}) => {
  if (isLoading) {
    return <Preloader />
  }

  return (
    <Styled.Wrap>
      <Styled.Background />
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>

        <Activity mode={isDescription ? "visible" : "hidden"}>
          <Styled.Description>{description}</Styled.Description>
        </Activity>

        <Styled.WrapRight>
          <Styled.ButtonCustom as={Link} to={`${linksPages.page_projects.link}/${slug}`}>
            О проекте <Icons.IconArrowRight />
          </Styled.ButtonCustom>
        </Styled.WrapRight>
      </Styled.Content>
    </Styled.Wrap>
  )
}

export default ProjectDescription
