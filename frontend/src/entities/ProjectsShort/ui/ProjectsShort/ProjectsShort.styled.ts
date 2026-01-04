import styled from "styled-components"

export const Preloader = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  width: 100%;
`

export const TitleSection = styled.h2`
  margin: 0 2rem 2.5rem 2rem;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Content = styled.div`
  display: grid;
  gap: 0.875rem;
  width: 100%;
  padding: 0 2rem 4rem 2rem;

  height: calc(100vh - 50px);

  grid-template-columns: 61.8fr 9.02fr 5.58fr 23.6fr;
  grid-template-rows: 61.8fr 9.02fr 5.58fr 23.6fr;
  grid-template-areas:
    "A B B B"
    "A E E C"
    "A E E C"
    "A D D C";

  background: ${({ theme }) => theme.main.background_black_extra};
`

const Item = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;

  &:hover div {
    opacity: 1;
  }
`

type TProject = {
  source: string
}

export const Project = styled(Item)<TProject>`
  background-image: url(${({ source = "" }) => source});
  background-repeat: no-repeat;
  background-size: cover;

  &:nth-of-type(1) {
    grid-area: A;
    font-size: 1em;
  }

  &:nth-of-type(2) {
    grid-area: B;
    font-size: 0.9em;
  }

  &:nth-of-type(3) {
    grid-area: C;
    font-size: 0.8em;
  }

  &:nth-of-type(4) {
    grid-area: D;
    font-size: 0.5em;
  }
`

export const WrapButtonGallery = styled(Item)`
  grid-area: E;
`

export const ButtonGallery = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.main.background_button};
  color: ${({ theme }) => theme.main.color_button};
  border: 2px solid ${({ theme }) => theme.main.background_button};
  font-family: ${({ theme }) => theme.main.font_family_headlines};
  transition-duration: ${({ theme }) => theme.main.animation_duration};
  font-size: 1.4rem;

  border-radius: 5px;
  font-weight: 600;
  padding: 1rem;
  line-height: 1.3rem;

  &:hover {
    background: ${({ theme }) => theme.main.hover_background_button};
    color: ${({ theme }) => theme.main.hover_text_button};
    border-color: ${({ theme }) => theme.main.hover_text_button};
  }
`
