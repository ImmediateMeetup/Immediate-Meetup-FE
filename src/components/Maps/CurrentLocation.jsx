import React, {useEffect, useState} from 'react'
import useKakaoLoader from './useKakaoLoader'
import {Map, MapMarker} from 'react-kakao-maps-sdk'

const CurrentLocation = () => {
  useKakaoLoader()

  const [location, setLocation] = useState({
    center: {
      lat: 37.580234738358605,
      lng: 126.92282415743652,
    },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }))
        },
        (err) => {
          setLocation((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        },
      )
    } else {
      setLocation((prev) => ({
        ...prev,
        errMsg: '현재위치를 불러올 수 없습니다',
        isLoading: false,
      }))
    }
  }, [])

  return (
    <div className=" w-2/3">
      <div>
        <Map center={location.center} className=" w-full h-72" level={3}>
          {!location.isLoading && (
            <MapMarker
              position={location.center}
              onClick={() => {
                console.log(`위치보내기 api 넣기 위도:${location.center.lat}, 경도:${location.center.lng}`)
              }}
            >
              <div className=" text-black">{location.errMsg ? location.errMsg : '여기 맞으신가요?'}</div>
            </MapMarker>
          )}
        </Map>
      </div>
    </div>
  )
}

export default CurrentLocation
