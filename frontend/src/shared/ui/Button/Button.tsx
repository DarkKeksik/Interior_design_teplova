import type { FC } from "react"
import * as Styled from "./Button.styled"

type TButton = {
  text: string
  onClick?: () => void
}

const Button: FC<TButton> = ({ text, onClick }) => {
  return <Styled.Button onClick={onClick}>{text}</Styled.Button>
}

export default Button
