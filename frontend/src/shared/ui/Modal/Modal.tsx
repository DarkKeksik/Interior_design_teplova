import type { FC, ReactNode } from "react"
import ReactModal from "react-modal"

import * as Styled from "./Modal.styled"

type TModalProps = {
  id: string
  title: string
  isOpen: boolean
  onAfterOpen?: () => void
  onClose: () => void
  children: ReactNode
}

const Modal: FC<TModalProps> = ({ id, title, isOpen, onClose, children, ...props }) => {
  return (
    <Styled.Modal
      as={ReactModal}
      id={id}
      contentLabel={title}
      isOpen={isOpen}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={{ background: "red" }}
      {...props}
    >
      <div>lorem</div>
    </Styled.Modal>
  )
}

export default Modal
