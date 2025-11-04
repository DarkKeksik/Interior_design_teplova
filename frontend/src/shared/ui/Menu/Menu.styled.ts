import styled from "styled-components"

export const Menu = styled.nav`
  display: flex;
  height: 100%;
  z-index: 2;
`

export const Item = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 1rem;

  font-size: 13px;
  font-family: ${({ theme }) => theme.main.font_family_text};

  color: {
    ${({ theme }) => theme.main.color_text_extra}
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    height: 2px;
    width: 100%;
    background: #fffff0;

    transform: translateX(calc(-100% - 2px));
    transition-duration: ${({ theme }) => theme.main.animation_duration};
    background: ${({ theme }) => theme.main.color_text};
  }

  &:hover {
    &:before {
      transform: translateX(0%);
    }
  }

  &.active {
    background: ${({ theme }) => theme.main.background_black};

    &:hover::before {
      display: none;
    }
  }
`
