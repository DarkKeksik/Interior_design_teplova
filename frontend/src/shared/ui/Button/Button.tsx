import type { FC, PropsWithChildren } from "react"
import * as Styled from "./Button.styled"

type TButton = {
  text?: string
  onClick?: () => void
} & PropsWithChildren

const Button: FC<TButton> = ({ text, onClick, children, ...props }) => {
  return (
    <Styled.Button onClick={onClick} {...props}>
      {children || text}
    </Styled.Button>
  )
}

export default Button
