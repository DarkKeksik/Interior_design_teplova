import type { FC, PropsWithChildren } from "react"
import { createPortal } from "react-dom"

import { Logo } from "@shared/ui"

import * as Styled from "./ModalNew.styled"

type TModal = PropsWithChildren<{
  isOpen: boolean
  onClose: () => void
  title?: string
  subTitle: string
}> &
  React.HTMLAttributes<HTMLDivElement>

const modal_accessibility = {
  role: "dialog",
  tabIndex: -1,
}

const ModalNew: FC<TModal> = ({ isOpen = false, onClose, children, title, subTitle, ...props }) => {
  const pressEsc = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    if (code !== "Escape") {
      return
    }
    onClose()
  }

  return createPortal(
    isOpen && (
      <Styled.Modal
        isOpen={isOpen}
        aria-modal={isOpen}
        onKeyDown={pressEsc}
        {...modal_accessibility}
        {...props}
      >
        <Styled.Overlay />
        <Styled.WrapperContent onClick={onClose}>
          <Styled.Content onClick={(e) => e.stopPropagation()}>
            <Styled.Header>
              <Styled.Logo as={Logo} />
              <Styled.Title>
                {title}
                <br />
                {subTitle}
              </Styled.Title>
            </Styled.Header>
            {children}
          </Styled.Content>
        </Styled.WrapperContent>
      </Styled.Modal>
    ),
    document.body
  )
}

export default ModalNew
