import type { FC } from "react"

import { Link } from "react-router-dom"

import { SectionBlack } from "@shared/ui"

import * as Styled from "./GallerySection.styled.ts"

const GallerySection: FC = () => {
  const onClick = () => {
    console.log(123)
  }

  return (
    <SectionBlack>
      <Styled.Container>
        <Styled.Content>
          <Styled.AArea></Styled.AArea>
          <Styled.BArea></Styled.BArea>
          <Styled.CArea></Styled.CArea>
          <Styled.DArea></Styled.DArea>
          <Styled.EArea>
            <Styled.ButtonGallery as={Link} to={"/"}>
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
