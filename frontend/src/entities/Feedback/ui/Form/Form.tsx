import type { FC } from "react"
import { useState } from "react"

import * as Styled from "./Form.styed"

type TForm = {
  onClose: () => void
}

const Form: FC<TForm> = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const handleSubmit = (e: React.FormEvent, onClose: any) => {
    e.preventDefault()

    if (!phoneNumber.trim()) {
      setError("Пожалуйста, введите номер телефона")
      return
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError("Пожалуйста, введите корректный номер телефона")
      return
    }

    setError("")

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
    <Styled.Form onSubmit={(e) => handleSubmit(e, onClose)}>
      <Styled.Label>
        Ваша почта
        <Styled.InputPhone
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder="Введите свой email адрес"
          disabled={isSubmitted}
          maxLength={11}
          aria-label="Email адрес"
        />
      </Styled.Label>

      <Styled.SubmitButton type="submit" disabled={isSubmitted || !phoneNumber.trim()}>
        {isSubmitted ? "Отправлено!" : "Позвоните мне"}
      </Styled.SubmitButton>

      {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}

      {isSubmitted && (
        <Styled.SuccessMessage>
          Спасибо! Мы свяжемся с вами в ближайшее время.
        </Styled.SuccessMessage>
      )}
    </Styled.Form>
  )
}

export default Form
