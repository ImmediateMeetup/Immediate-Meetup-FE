import React, {useEffect, useState} from 'react'
import {Map, MapMarker} from 'react-kakao-maps-sdk'
import useKakaoLoader from './useKakaoLoader'

const CurrentLocation = (props) => {
  useKakaoLoader()

  const handleModal = props.handleModal
  const setAddress = props.setAddress
  const setStringAddress = props.setStringAddress

  const handleAddress = () => {
    const geocoder = new kakao.maps.services.Geocoder()
    const address = {
      lat: location.center.lat,
      lng: location.center.lng,
    }
    setAddress(address)

    geocoder.coord2Address(location.center.lng, location.center.lat, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setStringAddress(result[0].road_address.address_name)
      } else {
        console.error('주소를 가져오는 데 실패했습니다.')
      }
    })
  }

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
    <div className=" top-2/3 w-3/4 h-72 z-10 absolute border border-r-8">
      <div>
        <Map
          center={location.center}
          className=" w-full h-72"
          level={3}
          onClick={(_, MouseEvent) => {
            const latlng = MouseEvent.latLng
            setLocation((prev) => ({
              ...prev,
              center: {
                lat: latlng.getLat(),
                lng: latlng.getLng(),
              },
            }))
          }}
        >
          {!location.isLoading && (
            <MapMarker
              position={location.center}
              onClick={() => {
                console.log(`위치보내기 api 넣기 위도:${location.center.lat}, 경도:${location.center.lng}`)
                handleAddress()
                handleModal()
              }}
            >
              <div
                className=" text-black"
                onClick={() => {
                  console.log(location.center)
                }}
              >
                {location.errMsg ? location.errMsg : '여기 맞으신가요?'}
              </div>
            </MapMarker>
          )}
        </Map>
      </div>
    </div>
  )
}

export default CurrentLocation
