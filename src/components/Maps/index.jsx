import React, {useState, useEffect} from 'react'
import {CustomOverlayMap, Map, MapInfoWindow, MapMarker} from 'react-kakao-maps-sdk'
import useKakaoLoader from './useKakaoLoader'
import Input from '../input/Input'

export default function BasicMap({lat, lng, route, subwayName}) {
  useKakaoLoader()
  const [map, setMap] = useState()
  const [center, setCenter] = useState({
    lat: lat || 37.5546788388674,
    lng: lng || 126.970606917394
  })
  const [infoOpen, setInfoOpen] = useState(false)
  const [markerPostion, setMarkerPostion] = useState({
    lat: center.lat + 0.001,
    lng: center.lng
  })
  return (
    <div className=" flex justify-center items-center bg-slate-100">
      <Map id="map" center={center} className=" w-[20rem] h-[20rem]" level={4} onCreate={setMap}>
        <MapMarker
          position={center}
          onClick={() => {
            setInfoOpen(!infoOpen)
          }}
        >
          {infoOpen && (
            <div>
              {route} {subwayName}역
            </div>
          )}
        </MapMarker>
      </Map>
    </div>
  )
}
