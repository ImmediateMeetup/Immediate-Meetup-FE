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

function App() {
  const [cookies] = useCookies(['AUTH-KEY'])

  const isAuthenticated = () => {
    return cookies['AUTH-KEY'] !== undefined
  }

  const PrivateRoute = ({element, ...rest}) => {
    return isAuthenticated() ? <Route {...rest} element={element} /> : <Navigate to="/login" replace />
  }

  return (
    <CookiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/maps" element={<SearchMap />} />
          <Route path="/map" element={<BasicMap />} />
          <Route path="/meetingroom" element={<PrivateRoute element={<MeetingRoom />} />} />
          <Route path="/teamDetail/*" element={<PrivateRoute element={<TeamDetail />} />} />
        </Routes>
      </Router>
    </CookiesProvider>
  )
}

export default App
