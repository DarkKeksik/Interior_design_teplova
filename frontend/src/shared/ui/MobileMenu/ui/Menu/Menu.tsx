import { FC } from "react"
import * as Styled from "./Menu.styled"
import { linksPages } from "@shared/config"
import { NavLink } from "react-router-dom"

type MenuProps = {
  isOpen: boolean
  onClose: () => void
}

const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <Styled.Menu isOpen={isOpen}>
      <Styled.CloseButton onClick={onClose} />

      {Object.values(linksPages).map(({ link_name, link, id }) => (
        <Styled.Item key={id} to={link} as={NavLink}>
          {link_name}
        </Styled.Item>
      ))}
    </Styled.Menu>
  )
}

export default Menu
