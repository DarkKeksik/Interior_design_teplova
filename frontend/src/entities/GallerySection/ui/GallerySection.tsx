import type { FC } from "react"

import * as Styled from "./GallerySection.styled.ts"

import { Button, SectionBlack } from "@shared/ui"

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
            <Button onClick={onClick} text="Gallery" />
          </Styled.EArea>
        </Styled.Content>
      </Styled.Container>
    </SectionBlack>
  )
}

export default GallerySection
