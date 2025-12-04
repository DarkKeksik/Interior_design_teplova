import type { FC, PropsWithChildren } from "react"

import * as Styled from "./Gallery.styled"

const Gallery: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Styled.ProjectGallery>
      <Styled.ImageContent>{children}</Styled.ImageContent>
    </Styled.ProjectGallery>
  )
}

export default Gallery
