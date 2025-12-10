import styled from "styled-components"

export const Wrap = styled.div`
  min-height: calc(100vh - (50px));
  position: relative;
`

export const Map = styled.div``

export const Popup = styled.div`
  & {
    .maplibregl-popup-content {
      border-radius: 5px;
      background: #272726;
      font-size: 0.9rem;
      line-height: 1.2rem;
      font-family: "Montserrat";
    }

    .maplibregl-popup-tip {
      border-top-color: #1b1b1b;
    }

    .maplibregl-marker {
      top: 5px !important;
    }
  }
`
