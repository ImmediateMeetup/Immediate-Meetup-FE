import {useKakaoLoader as useKaKaoLoaderOrigin} from 'react-kakao-maps-sdk'

export default function useKakaoLoader() {
  useKaKaoLoaderOrigin({
    appkey: process.env.REACT_APP_MAP_CLIENT_KEY,
    libraries: ['clusterer', 'services']
  })
}
