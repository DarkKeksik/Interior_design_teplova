import { css } from "styled-components"

type TFlexAlign = {
  direction: string
  justify: string
  alignItems: string
}

export const flexAlign = ({
  direction = "column",
  justify = "center",
  alignItems = "center",
}: TFlexAlign) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${alignItems};
`

export const hW100 = css`
  height: 100%;
  width: 100%;
`

export const paddingLarge = css`
  padding: 2.5rem;
`

export const paddingMedium = css`
  padding: 1.8rem;
`

export const paddingSmall = css`
  padding: 1.25rem;
`
