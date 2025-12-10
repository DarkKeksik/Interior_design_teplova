import styled from "styled-components"

export const Title = styled.div`
  font-size: 25px;
  font-weight: 400;
`

export const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5rem;
  padding: 3rem;
  min-height: calc(100vh - (50px));
`

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const Review = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 5px;
  padding: 1.5rem 3rem;
  background: #fffff0;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  border-bottom: 2px solid #2a2a2a;
  padding-bottom: 10px;
`

export const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #1b1b1b;
`

export const Date = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: #1b1b1b;
`

export const Content = styled.div`
  color: #1b1b1b;
  font-size: 17px;
  line-height: 1.5rem;
`

export const WrapBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormReview = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  border: 0;
  outline: none;
  background: #fffff0;
  color: #1b1b1b;
  font-family: ${({ theme }) => theme.main.font_family_headlines};
`

export const InputText = styled.textarea`
  min-height: 150px;
  grid-column: 1 / -1;
  padding: 10px 20px;
  border-radius: 5px;
  border: 0;
  resize: none;
  appearance: none;

  outline: none;
  background: #fffff0;
  color: #1b1b1b;
  font-family: ${({ theme }) => theme.main.font_family_headlines};
`

export const ButtonSubmit = styled.button`
  grid-column: 2 / -1;
`
