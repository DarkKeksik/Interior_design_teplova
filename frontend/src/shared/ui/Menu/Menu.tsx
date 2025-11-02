import type { FC } from "react"
import * as Styled from "./Menu.styled"

import { linksPages } from "@shared/config"

export const Menu: FC = () => {
  return (
    <Styled.Menu>
      {Object.values(linksPages).map(({ link_name, link, id }) => (
        <Styled.Item key={id} href={link}>
          {link_name}
        </Styled.Item>
      ))}
    </Styled.Menu>
  )
}

export default Menu
