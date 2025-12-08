import type { FC } from "react"

import { Modal } from "@shared/ui"

import { Form } from "../"

type TContactUsModalProps = {
  isOpen: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

const ContactUsModal: FC<TContactUsModalProps> = ({ onClose, ...props }) => {
  return (
    <Modal
      onClose={onClose}
      id="ContactUsModal"
      title="Отправьте заявку и мы сможем обсудить"
      subTitle="проект вашей мечты"
      {...props}
    >
      <Form onClose={onClose} />
    </Modal>
  )
}

export default ContactUsModal
