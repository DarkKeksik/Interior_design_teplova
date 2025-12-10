import type { FC } from "react"

import { useEffect, useRef, useState } from "react"

import Map, { Marker, Popup } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"

import IconPin from "../../assets/maps-pin-icon.svg?react"
import * as Styled from "./Map.styled"

type TSize = {
  width: number
  height: number
} | null

const mapStyle = "https://api.maptiler.com/maps/streets/style.json"
const mapKey = "WHszo6uLfyjjJYKZzTxf"
const coordinatesVladivostok = {
  longitude: 131.8735,
  latitude: 43.1056,
}

const MapProjectLocation: FC = () => {
  const sizeBlockRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<TSize>(null)

  useEffect(() => {
    if (sizeBlockRef.current) {
      setSize({
        width: sizeBlockRef?.current.offsetWidth,
        height: sizeBlockRef?.current.offsetHeight,
      })
    }
  }, [sizeBlockRef.current])

  return (
    <Styled.Wrap ref={sizeBlockRef}>
      <Styled.Map
        as={Map}
        initialViewState={{
          ...coordinatesVladivostok,
          zoom: 17,
        }}
        mapStyle={`${mapStyle}?key=${mapKey}`}
        style={{ width: size?.width, height: size?.height }}
      >
        <Marker {...coordinatesVladivostok} anchor="top">
          <IconPin width={20} hight={20} fill="#272726" />
        </Marker>
        <Styled.Popup
          as={Popup}
          {...coordinatesVladivostok}
          offset={5}
          focusAfterOpen={false}
          anchor="bottom"
          closeOnClick={false}
          closeButton={false}
        >
          Реализация проекта
          <br />
          Город Владивосток, ул. станиковича 14
        </Styled.Popup>
      </Styled.Map>
    </Styled.Wrap>
  )
}

export default MapProjectLocation
