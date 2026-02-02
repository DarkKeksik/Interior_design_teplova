import * as Styled from "./Button.styled"

type Props = {
  onClick: () => void
}

export const Button = ({ onClick }: Props) => {
  return (
    <Styled.Button className="button" onClick={onClick}>
      ☰
    </Styled.Button>
  )
}
