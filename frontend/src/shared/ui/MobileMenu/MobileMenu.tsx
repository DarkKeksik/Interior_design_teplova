import { useState } from "react"
import * as Styled from "./MobileMenu.styled"
import Menu from "./ui/Menu/Menu"
import { Button } from "./ui/Button/Button"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Styled.MobileMenu>
      <Button onClick={() => setIsOpen(!isOpen)} />

      {isOpen && <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </Styled.MobileMenu>
  )
}

export default MobileMenu
