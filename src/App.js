import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Join from './pages/Join'
import BasicMap from './components/Maps'
import {CookiesProvider, useCookies} from 'react-cookie'
import MeetingRoom from './pages/Meeting/Main'
import TeamDetail from './pages/Meeting/TeamDetail'
import SearchMap from './components/Maps/SearchMap'
import MyPage from './pages/MyPage'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Main from './pages/Meeting/Main'

function App() {
  const queryClient = new QueryClient()

  const [cookies] = useCookies(['AUTH-KEY'])

  const isAuthenticated = () => {
    return cookies['AUTH-KEY'] !== undefined
  }

  const PrivateRoute = ({element, ...rest}) => {
    return isAuthenticated() ? <Route {...rest} element={element} /> : <Navigate to="/login" replace />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/main" element={<Main />} />
            <Route path="/maps" element={<SearchMap />} />
            <Route path="/map" element={<BasicMap />} />
            <Route path="/meetingroom" element={<PrivateRoute element={<MeetingRoom />} />} />
            <Route path="/teamDetail/*" element={<PrivateRoute element={<TeamDetail />} />} />
            <Route path="/myPage" element={<PrivateRoute element={<MyPage />} />} />
          </Routes>
        </Router>
      </CookiesProvider>
    </QueryClientProvider>
  )
}

export default App
