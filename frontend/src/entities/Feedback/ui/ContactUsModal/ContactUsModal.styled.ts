import styled from "styled-components"

import { mixinsMediaStyled } from "@shared/ui"

export const FormContainer = styled.div`
  position: relative;
  width: 800px;
  height: 800px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  box-sizing: border-box;

  ${mixinsMediaStyled.media.mobile} {
    width: calc(100vw - 2rem);
    height: auto;
    max-height: 90vh;
    padding: 2rem 1.5rem;
    border-radius: 15px;
    overflow-y: auto;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 500px;

  ${mixinsMediaStyled.media.mobile} {
    gap: 1.5rem;
    max-width: 100%;
  }
`

export const Title = styled.h2`
  color: white;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;

  ${mixinsMediaStyled.media.mobile} {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.5;

  ${mixinsMediaStyled.media.mobile} {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    line-height: 1.4;
  }
`

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

export const PhoneInput = styled.input`
  width: 100%;
  padding: 20px 25px;
  font-size: 18px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  box-sizing: border-box;
  color: #000;

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #999;
  }

  ${mixinsMediaStyled.media.mobile} {
    padding: 0.875rem 1rem;
    font-size: 1rem;
    border-radius: 10px;
  }
`

export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: ${(props) =>
    props.disabled ? "#ccc" : "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)"};
  border: none;
  border-radius: 12px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

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

  ${mixinsMediaStyled.media.mobile} {
    padding: 0.875rem 1rem;
    font-size: 1rem;
    border-radius: 10px;
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

  ${mixinsMediaStyled.media.mobile} {
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;

    &::before,
    &::after {
      width: 1rem;
    }
  }
`

export const SuccessMessage = styled.div`
  color: #4ade80;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;

  ${mixinsMediaStyled.media.mobile} {
    font-size: 0.875rem;
  }
`

export const ErrorMessage = styled.div`
  color: #f87171;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;

  ${mixinsMediaStyled.media.mobile} {
    font-size: 0.875rem;
  }
`
