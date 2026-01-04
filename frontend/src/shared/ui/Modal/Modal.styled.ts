import styled from "styled-components"

type TModal = { isOpen: boolean }

type TContent = {
  isPadding?: boolean
  size: "s" | "m" | "l"
}

export const Modal = styled.div<TModal>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: ${({ theme }) => theme.main && theme.main.font_family_text};
  z-index: ${({ theme }) => theme.main && theme.main.modal.overlay.zIndex};
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.main && theme.main.modal.overlay.background};
  z-index: 0;
`

export const WrapperContent = styled.div`
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: ${({ theme }) => theme.main && theme.main.modal.overlay.zIndex + 1};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

export const Content = styled.div<TContent>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  max-width: ${({ size }) => {
    switch (size) {
      case "s":
        return "320px"
      case "m":
        return "620px"
      case "l":
        return "1200px"
    }
  }};

  width: 100%;
  background-color: white;
  min-height: 55vh;
  border-radius: 5px;
  padding: ${({ isPadding }) => (isPadding ? "3.5rem 1.5rem" : "0")};
  color: ${({ theme }) => theme.main && theme.main.modal.content.colorText};
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.main && theme.main.modal.content.colorText};
`

export const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.main && theme.main.modal.content.colorText};
`

export const Panel = styled.div``
