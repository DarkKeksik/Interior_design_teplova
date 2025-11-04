import type { FC } from "react"

import { NavLink } from "react-router-dom"

import { linksPages } from "@shared/config"

import * as Styled from "./Menu.styled"

export const Menu: FC = () => {
  return (
    <Styled.Menu>
      {Object.values(linksPages).map(({ link_name, link, id }) => (
        <Styled.Item key={id} to={link} as={NavLink}>
          {link_name}
        </Styled.Item>
      ))}
    </Styled.Menu>
  )
}

export default Menu
