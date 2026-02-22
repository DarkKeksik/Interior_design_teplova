import * as Styled from "./Button.styled"

import { IconHamburger } from "../../../../assets"

type Props = {
  onClick: () => void
}

export const Button = ({ onClick }: Props) => {
  const iconSize = "25px"

  return (
    <Styled.Button className="button" onClick={onClick}>
      <IconHamburger width={iconSize} height={iconSize} stroke="#FFFFF0" />
    </Styled.Button>
  )
}
