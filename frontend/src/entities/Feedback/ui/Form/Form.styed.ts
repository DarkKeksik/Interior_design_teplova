import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 20rem;
  height: 100%;
`

export const Title = styled.h2`
  color: white;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.5;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  font-size: 14px;
  text-align: left;
  color: ${({ theme }) => theme.main && theme.main.color_text_extra_2};
`

export const InputPhone = styled.input`
  width: 100%;
  box-sizing: border-box;
  color: #000;
  border: 1px solid #a5a5a533;
  border-radius: 5px;
  background: #a5a5a533;
  padding: 0.5rem;
  font-size: 15px;

  &:focus {
    background: white;
  }

  &::placeholder {
    color: #999;
  }
`

export const SubmitButton = styled.button<{ disabled: boolean }>`
  padding: 0.875rem 2rem;
  font-size: 14px;
  color: white;
  background: #080808;
  border: none;
  border-radius: 100px;
  cursor: not-allowed;
  transition: all 0.3s ease;

  &:hover {
    ${(props) =>
      !props.disabled &&
      `
      transform: translateY(-2px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
    `}
  }

  &:active {
    ${(props) =>
      !props.disabled &&
      `
      transform: translateY(0);
    `}
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: white;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export const SuccessMessage = styled.div`
  color: #4ade80;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
`

export const ErrorMessage = styled.div`
  color: #f87171;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
`
