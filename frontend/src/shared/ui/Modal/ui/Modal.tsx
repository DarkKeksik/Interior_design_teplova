import { FC, ReactNode } from "react"
import { default as ReactModal } from "react-modal"

type TModalProps = {
  id: string
  title: string
  isOpen: boolean
  onAfterOpen?: () => void
  className?: string
  styles?: ReactModal.Styles
  onClose: () => void
  children: ReactNode
}

export const Modal: FC<TModalProps> = ({
  id,
  title,
  isOpen,
  className,
  styles,
  onClose,
  children,
}) => {
  return (
    <ReactModal
      className={className}
      id={id}
      contentLabel={title}
      isOpen={isOpen}
      style={styles}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "unset")}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
    >
      {children}
    </ReactModal>
  )
}
