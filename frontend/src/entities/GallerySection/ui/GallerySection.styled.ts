import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: grid;
  gap: 0.875rem;
  width: 100%;

  height: calc(100vh - 50px);
  padding: 2rem;

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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`
export const AArea = styled(Item)`
  grid-area: A;
  background-image: url("/img/gallery_main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

export const BArea = styled(Item)`
  grid-area: B;
  background-image: url("/img/1.5-small-gallery.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

export const CArea = styled(Item)`
  grid-area: C;
  background-image: url("/img/2x-small-gallery.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

export const DArea = styled(Item)`
  grid-area: D;
  background-image: url("/img/2.5x-small-gallery.jfif");
  background-repeat: no-repeat;
  background-size: cover;
`

export const EArea = styled(Item)`
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

  border-radius: 10px;
  font-weight: 600;
  padding: 1rem;
  line-height: 1.3rem;

  &:hover {
    background: ${({ theme }) => theme.main.hover_background_button};
    color: ${({ theme }) => theme.main.hover_text_button};
    border-color: ${({ theme }) => theme.main.hover_text_button};
  }
`
