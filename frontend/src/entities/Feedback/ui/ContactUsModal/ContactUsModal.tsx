import type { FC } from "react"
import { useState } from "react"

import { ModalNew } from "@shared/ui"

import { Form } from "../"

type TContactUsModalProps = {
  isOpen: boolean
  onClose: () => void
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
