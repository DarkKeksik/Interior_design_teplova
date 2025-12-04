import type { FC } from "react"

import * as Styled from "./Preloader.styled"

export const TSizes = { s: "s", m: "m", l: "l" } as const

type TPreloader = {
  isLoading?: boolean
  size?: keyof typeof TSizes
}

const Preloader: FC<TPreloader> = ({ isLoading = true, size = "l" }) => {
  if (!isLoading) {
    return
  }

  return (
    <Styled.Preloader>
      <Styled.Loader size={size} />
    </Styled.Preloader>
  )
}

export default Preloader
