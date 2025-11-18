import type { FC, PropsWithChildren } from "react"

import * as Styled from "./TitleSection.styled"

type TTitleSection = { isAlignRight?: boolean; isBlack?: boolean } & PropsWithChildren

const TitleSection: FC<TTitleSection> = ({ children, isAlignRight = false, isBlack = false }) => {
  return (
    <Styled.TitleSection isRight={isAlignRight} isBlackColor={isBlack}>
      {children}
    </Styled.TitleSection>
  )
}

export default TitleSection
