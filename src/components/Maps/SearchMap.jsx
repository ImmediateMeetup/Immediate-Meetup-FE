import React, {useState, useEffect} from 'react'
import {Map, MapMarker} from 'react-kakao-maps-sdk'
import useKakaoLoader from './useKakaoLoader'
import Input from '../input/Input'

export default function SearchMap() {
  useKakaoLoader()

  const [info, setInfo] = useState()
  const [markers, setMarkers] = useState([])
  const [map, setMap] = useState()
  const [searchWord, setSearchWord] = useState('')
  const [searchComplete, setSearchComplete] = useState(false)
  const [center, setCenter] = useState({
    lat: 33.450701,
    lng: 126.570667
  })
  const [zoomLevel, setZoomLevel] = useState(3)

  useEffect(() => {
    if (!map || !searchWord) return
    const ps = new kakao.maps.services.Places()
    ps.keywordSearch(searchWord, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds()
        let newMarkers = []

        for (let i = 0; i < data.length; i++) {
          newMarkers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x
            },
            content: data[i].place_name
          })
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }
        setMarkers(newMarkers)

        map.setBounds(bounds)
      }
    })
    setSearchComplete(false)
  }, [map, searchComplete])

  useEffect(() => {
    if (map && center) {
      map.setCenter(new kakao.maps.LatLng(center.lat, center.lng))
      map.setLevel(zoomLevel)
    }
  }, [map, center, zoomLevel])

  const handleSearch = () => {
    setSearchWord(searchWord)
    setSearchComplete(true)
  }

  return (
    <div className=" flex justify-center items-center bg-slate-100">
      <Map id="map" center={center} className=" w-[40rem] h-[30rem]" level={zoomLevel} onCreate={setMap}>
        {markers.map((marker, index) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onMouseOver={() => setInfo(marker)}
            onClick={() => setInfo(marker)}
            className=" cursor-pointer"
          >
            {info && info.content === marker.content && <div className="text-[#000] text-m">{marker.content} </div>}
          </MapMarker>
        ))}
      </Map>
      <div className=" mx-32">
        <div>
          <input
            placeholder="검색어를 입력하세요"
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value)
            }}
          />
          <button onClick={handleSearch}>검색</button>
        </div>
        <ul id="placesList">
          {markers.map((marker, index) => (
            <li key={index} className=" w-fit">
              <span></span>
              <button
                onClick={() => {
                  console.log('장소', marker.content, '\n위도:', marker.position.lat, '경도:', marker.position.lng)
                  setCenter({
                    lat: marker.position.lat,
                    lng: marker.position.lng
                  })
                  setZoomLevel(3)
                }}
              >
                <h5>{marker.content}</h5>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
