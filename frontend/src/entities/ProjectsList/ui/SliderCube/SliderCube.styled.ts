import styled from "styled-components"

export const SliderCube = styled.div`
  position: relative;
  width: 480px;
  height: 480px;
  padding: 3.1rem;
  border: 12px double #fffff00a;

  &::before {
    content: "26 м²";
    position: absolute;
    top: -1.5rem;
    left: -3rem;
    transform: rotate(-45deg);
    font-size: 1.2rem;

    background: #262626;
    padding: 1rem;
    border-radius: 100px;
  }

  &::after {
    content: "26 м²";
    position: absolute;
    bottom: -1.5rem;
    right: -3rem;
    transform: rotate(-45deg);
    font-size: 1.2rem;

    background: #262626;
    padding: 1rem;
    border-radius: 100px;
  }
`

export const Item = styled.img`
  height: 100%;
  width: 100%;
`
