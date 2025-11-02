import type { FC } from "react"
import * as Styled from "./Button.styled"

type TButton = {
  text: string
}

const Button: FC<TButton> = ({ text }) => {
  return <Styled.Button>{text}</Styled.Button>
}

export default Button
