import styled from "styled-components"
import { media } from "@app/styles/media.styled"

export const Wrap = styled.div`
  min-height: calc(100vh - (50px));
  position: relative;

  ${media.mobile} {
    min-height: 300px;
  }
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

    ${media.mobile} {
      .maplibregl-popup-content {
        font-size: 0.8rem;
        line-height: 1.1rem;
        padding: 0.75rem;
      }
    }
  }
`
