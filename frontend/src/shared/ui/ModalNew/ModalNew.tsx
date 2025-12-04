import type { FC, PropsWithChildren } from "react"
import { createPortal } from "react-dom"

import { Logo } from "@shared/ui"

import * as Styled from "./ModalNew.styled"

type TSizesModal = "s" | "m" | "l"

type TModal = PropsWithChildren<{
  isOpen: boolean
  onClose: React.Dispatch<React.SetStateAction<any>>
  title?: string
  subTitle?: string
  isHeader?: boolean
  isPadding?: boolean
  size?: TSizesModal
}> &
  React.HTMLAttributes<HTMLDivElement>

const modal_accessibility = {
  role: "dialog",
  tabIndex: -1,
}

const ModalNew: FC<TModal> = ({
  isHeader = true,
  isPadding = true,
  isOpen = false,
  onClose,
  children,
  title,
  subTitle,
  size = "m",
  ...props
}) => {
  const pressEsc = ({ code }: React.KeyboardEvent<HTMLInputElement>) => {
    if (code !== "Escape") {
      return
    }

    onClose(false)
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
        <Styled.WrapperContent onClick={() => onClose(false)}>
          <Styled.Content onClick={(e) => e.stopPropagation()} isPadding={isPadding} size={size}>
            {isHeader && (
              <Styled.Header>
                <Styled.Logo as={Logo} />
                <Styled.Title>
                  {title}
                  <br />
                  {subTitle}
                </Styled.Title>
              </Styled.Header>
            )}
            {children}
          </Styled.Content>
        </Styled.WrapperContent>
      </Styled.Modal>
    ),
    document.body
  )
}

export default ModalNew
