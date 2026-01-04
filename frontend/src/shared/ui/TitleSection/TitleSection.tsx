import type { FC, PropsWithChildren } from "react"

import * as Styled from "./TitleSection.styled"

type TTitleSection = { isAlignRight?: boolean; isBlack?: boolean } & PropsWithChildren

const TitleSection: FC<TTitleSection> = ({
  children,
  isAlignRight = false,
  isBlack = false,
  ...props
}) => {
  return (
    <Styled.TitleSection isRight={isAlignRight} isBlackColor={isBlack} {...props}>
      {children}
    </Styled.TitleSection>
  )
}

export default TitleSection
