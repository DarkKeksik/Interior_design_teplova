import type { FC } from "react"

import { Modal } from "@shared/ui"
import { hooksData } from "@shared/hooks"

import { Form } from "../"

type TContactUsModalProps = {
  isOpen: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

type TDataBackend = {
  data: {
    buttonSendName: string
    title: string
  }
}

const ContactUsModal: FC<TContactUsModalProps> = ({ onClose, ...props }) => {
  const { isLoading, dataBackend } = hooksData.useAxios<TDataBackend>({
    url: "/form-request-design",
  })

  if (isLoading) {
    return null
  }

  return (
    <Modal onClose={onClose} id="ContactUsModal" title={dataBackend?.data?.title} {...props}>
      <Form onClose={onClose} buttonSubmitName={dataBackend?.data?.buttonSendName} />
    </Modal>
  )
}

export default ContactUsModal
