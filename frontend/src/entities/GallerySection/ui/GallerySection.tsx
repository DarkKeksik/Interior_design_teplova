import type { FC } from "react"

import { Link } from "react-router-dom"

import { SectionBlack } from "@shared/ui"
import { linksPages } from "@shared/config"

import * as Styled from "./GallerySection.styled.ts"

const GallerySection: FC = () => {
  return (
    <SectionBlack>
      <Styled.Container>
        <Styled.Content>
          <Styled.AArea></Styled.AArea>
          <Styled.BArea></Styled.BArea>
          <Styled.CArea></Styled.CArea>
          <Styled.DArea></Styled.DArea>
          <Styled.EArea>
            <Styled.ButtonGallery as={Link} to={linksPages.page_gallery.link}>
              Больше
              <br />
              проектов
            </Styled.ButtonGallery>
          </Styled.EArea>
        </Styled.Content>
      </Styled.Container>
    </SectionBlack>
  )
}

export default GallerySection
