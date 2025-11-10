import type { FC, PropsWithChildren } from "react"
import * as Styled from "./Button.styled"

type TButton = {
  text?: string
  onClick?: () => void
} & PropsWithChildren

const Button: FC<TButton> = ({ text, onClick, children }) => {
  return <Styled.Button onClick={onClick}>{children || text}</Styled.Button>
}

export default Button
