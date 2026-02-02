import styled from "styled-components"

export const Menu = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.main && theme.burgerMenu.background};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;
  transition: top 0.3s ease-in-out;
  overflow-y: auto;
`

export const Item = styled.li`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  color: ${({ theme }) => theme.main && theme.burgerMenu.colorText};

  &:last-child {
    border-bottom: none;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: ${({ theme }) => theme.main && theme.burgerMenu.colorText};

  &:after {
    content: "×";
  }
`
