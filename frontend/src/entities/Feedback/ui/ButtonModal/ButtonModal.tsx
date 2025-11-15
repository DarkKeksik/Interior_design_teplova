import type { FC } from "react"

import { Button } from "@shared/ui"

type TButtonModal = {
  onClick: () => void
}
const ButtonModal: FC<TButtonModal> = ({ onClick }) => {
  const handleOpen = () => {
    onClick()
  }

  return <Button text="Напишите мне" onClick={handleOpen} />
}

export default ButtonModal
