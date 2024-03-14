import React, {useState, useEffect} from 'react'
import {Map, MapMarker} from 'react-kakao-maps-sdk'
import useKakaoLoader from './useKakaoLoader'
import Input from '../input/Input'
import {patchUserLocation} from '../../apis'

export default function SearchMap({onClose, id, token, stringAddress}) {
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
    const geoCoder = new kakao.maps.services.Geocoder()
    geoCoder.addressSearch(stringAddress, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setCenter({
          lat: result[0].y,
          lng: result[0].x
        })
        let marker = []
        marker.push({
          position: center,
          content: stringAddress
        })
        setMarkers(marker)
        console.log(center)
      }
    })
  }, [])
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
    console.log('검색')
  }

  const handleClear = () => {
    console.log(center)
    // patchUserLocation(id, token, center)
    onClose()
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-[40rem] h-[32rem]">
        <div className=" mb-1">본인 위치 변경해주세요</div>
        <Map id="map" center={center} className="w-full h-[20rem]" level={zoomLevel} onCreate={setMap}>
          {markers.map((marker, index) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onMouseOver={() => setInfo(marker)}
              onClick={() => setInfo(marker)}
              className="cursor-pointer text-xs"
            >
              {info && info.content === marker.content && <div className="text-[#000] text-m">{marker.content}</div>}
            </MapMarker>
          ))}
        </Map>
        <div className="mt-4 flex">
          <input placeholder="검색어를 입력하세요" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
          <button className="ml-2 px-4 py-2 h-[55px] bg-blue-500 text-white rounded-md" onClick={handleSearch}>
            검색
          </button>
          <button className="ml-2 px-4 py-2 h-[55px] bg-pink-500 text-white rounded-md" onClick={handleClear}>
            완료
          </button>
        </div>
        <ul className="mt-4 flex overflow-x-auto  text-white">
          {markers.map((marker, index) => (
            <li key={index} className=" flex-shrink-0 mx-2 ">
              <button
                onClick={() => {
                  console.log('장소', marker.content, '\n위도:', marker.position.lat, '경도:', marker.position.lng)
                  setCenter({
                    lat: marker.position.lat,
                    lng: marker.position.lng
                  })
                  setZoomLevel(3)
                }}
                className="text-blue-500"
              >
                {marker.content}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
