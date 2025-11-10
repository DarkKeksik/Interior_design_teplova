import type { FC } from "react"

import { Link } from "react-router-dom"

import { SectionBlack } from "@shared/ui"
import { linksPages } from "@shared/config"

import { ProjectDescription } from "../"
import * as Styled from "./GalleryShortSection.styled.ts"

const GalleryShortSection: FC = () => {
  return (
    <SectionBlack>
      <Styled.Container>
        <Styled.Content>
          <Styled.AArea>
            <ProjectDescription />
          </Styled.AArea>

          <Styled.BArea>
            <ProjectDescription />
          </Styled.BArea>

          <Styled.CArea>
            <ProjectDescription isDescription={false} />
          </Styled.CArea>

          <Styled.DArea>
            <ProjectDescription isDescription={false} />
          </Styled.DArea>

          <Styled.EArea>
            <Styled.ButtonGallery as={Link} to={linksPages.page_gallery.link}>
              Больше <br /> проектов
            </Styled.ButtonGallery>
          </Styled.EArea>
        </Styled.Content>
      </Styled.Container>
    </SectionBlack>
  )
}

export default GalleryShortSection
