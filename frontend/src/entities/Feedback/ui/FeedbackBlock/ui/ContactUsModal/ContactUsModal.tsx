import { FC, useState } from "react"
import * as Styled from "./ContactUsModal.styled"
import { Modal } from "@shared/ui/Modal"
import themes from "@app/themes/themes.ts"

type TContactUsModalProps = {
  isOpen: boolean
  onClose: () => void
}
export const ContactUsModal: FC<TContactUsModalProps> = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!phoneNumber.trim()) {
      setError("Пожалуйста, введите номер телефона")
      return
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError("Пожалуйста, введите корректный номер телефона")
      return
    }

    // Имитация отправки данных
    // Сброс формы через 3 секунды
    console.log("Отправлен номер телефона:", phoneNumber)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setPhoneNumber("")
      onClose()
    }, 3000)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPhoneNumber(value)

    // Сбрасываем ошибку при вводе
    if (error) {
      setError("")
    }
  }

  return (
    <Modal
      id="ContactUsModal"
      title="Свяжитесь с нами"
      isOpen={isOpen}
      styles={themes.modal}
      onClose={onClose}
    >
      <Styled.FormContainer>
        <Styled.CloseButton onClick={onClose} aria-label="Закрыть форму" />

        <Styled.Form onSubmit={handleSubmit}>
          <div>
            <Styled.Title>Свяжитесь с нами</Styled.Title>
            <Styled.Description>
              Оставьте ваш номер телефона, и наш специалист свяжется с вами в ближайшее время для
              консультации
            </Styled.Description>
          </div>

          <Styled.InputContainer>
            <Styled.PhoneInput
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="+7 (___) ___-__-__"
              disabled={isSubmitted}
              maxLength={11}
              aria-label="Номер телефона"
            />
          </Styled.InputContainer>

          {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}

          {isSubmitted && (
            <Styled.SuccessMessage>
              Спасибо! Мы свяжемся с вами в ближайшее время.
            </Styled.SuccessMessage>
          )}

          <Styled.SubmitButton type="submit" disabled={isSubmitted || !phoneNumber.trim()}>
            {isSubmitted ? "Отправлено!" : "Позвоните мне"}
          </Styled.SubmitButton>
        </Styled.Form>
      </Styled.FormContainer>
    </Modal>
  )
}
