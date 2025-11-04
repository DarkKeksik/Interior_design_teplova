import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 70vw;
  height: calc(70vw / 1.618);
  display: grid;

  grid-template-columns: 61.8% 9.02% 5.58% 23.6%;
  grid-template-rows: 61.8% 9.02% 5.58% 23.6%;
  grid-template-areas:
    "A B B B"
    "A E E C"
    "A E E C"
    "A D D C";
`

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  color: #f2f2f2;
  font-size: 1.5em;
  font-weight: 700;
  text-shadow: 1px 1px 1px #878787;
  box-sizing: border-box;
`
export const AArea = styled(Item)`
  grid-area: A;
  background-color: #a0ddff;
  background-image: url("/img/gallery_main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

export const BArea = styled(Item)`
  grid-area: B;
  background-color: #c1cefe;
  background-image: url("/img/1.5-small-gallery.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

export const CArea = styled(Item)`
  grid-area: C;
  background-color: #758ecd;
  background-image: url("/img/2x-small-gallery.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`

export const DArea = styled(Item)`
  grid-area: D;
  background-color: #c1cefe;
  background-image: url("/img/2.5x-small-gallery.jfif");
  background-repeat: no-repeat;
  background-size: cover;
`

export const EArea = styled(Item)`
  grid-area: E;
  background-color: #000000;
`
