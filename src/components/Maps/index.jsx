import React, {useState, useEffect} from 'react'
import {CustomOverlayMap, Map, MapInfoWindow, MapMarker} from 'react-kakao-maps-sdk'
import useKakaoLoader from './useKakaoLoader'
import Input from '../input/Input'

export default function BasicMap({lat, lng, route, subwayName}) {
  useKakaoLoader()
  const [map, setMap] = useState()
  const [center, setCenter] = useState({
<<<<<<< Updated upstream
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
=======
    lat: lat || 37.5546788388674,
    lng: lng || 126.970606917394
  })
  const [infoOpen, setInfoOpen] = useState(false)
>>>>>>> Stashed changes

  return (
    <div className=" flex justify-center items-center bg-slate-100">
      <Map id="map" center={center} className=" w-[40rem] h-[30rem]" level={4} onCreate={setMap}>
        <MapMarker
          position={center}
          onClick={() => {
            setInfoOpen(!infoOpen)
          }}
        >
          {infoOpen && (
            <CustomOverlayMap position={center}>
              <div className=" bg-white">{`${route} ${subwayName}역`}</div>
            </CustomOverlayMap>
          )}
        </MapMarker>
      </Map>
<<<<<<< Updated upstream
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
            <li key={index} className=" border border-black">
              <span></span>
              <button
                onClick={() => {
                  console.log('장소', marker.content, '\n위도:', marker.position.lat, '경도:', marker.position.lng)
                  setCenter({
                    lat: marker.position.lat,
                    lng: marker.position.lng
                  })
                  setZoomLevel(3) // Zoom level 변경
                }}
              >
                <h5>{marker.content}</h5>
                <span>
                  {marker.position.lat}, {marker.position.lng}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
=======
    </div>
>>>>>>> Stashed changes
  )
}
