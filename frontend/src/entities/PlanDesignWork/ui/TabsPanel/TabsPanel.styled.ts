import styled from "styled-components"

type TTabItem = {
  isActive?: boolean
}

export const Wrap = styled.div`
  display: flex;
  gap: 2rem;
`

export const WrapTab = styled.div`
  position: sticky;
  top: 52px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Subtite = styled.h3`
  color: #1b1b1b;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.5rem 0;
`

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`

export const TabItem = styled.p<TTabItem>`
  position: relative;
  padding: 0.875rem;

  background: ${({ isActive, theme }) =>
    isActive ? theme.main.some_accent : theme.main.background_black};
  color: ${({ isActive, theme }) =>
    isActive ? theme.main.background_white : theme.main.background_white};
  border-bottom: 1px solid;
  text-align: center;
  line-height: 1.5rem;
  min-width: 18.75rem;
  cursor: pointer;

  border-radius: 5px;

  overflow: hidden;
  transition-duration: 0.3s;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.main.some_accent};

    transform: translateX(calc(-100% - 2px));
    transition-duration: ${({ theme }) => theme.main.animation_duration};
  }

  &:hover {
    &:before {
      transform: translateX(0%);
    }
  }
`
