import type { FC } from "react"

import { ModalNew } from "@shared/ui"

import { Form } from "../"

type TContactUsModalProps = {
  isOpen: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactUsModal: FC<TContactUsModalProps> = ({ onClose, ...props }) => {
  return (
    <ModalNew
      onClose={onClose}
      id="ContactUsModal"
      title="Отправьте заявку и мы сможем обсудить"
      subTitle="проект вашей мечты"
      {...props}
    >
      <Form onClose={onClose} />
    </ModalNew>
  )
}

export default ContactUsModal
