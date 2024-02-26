import {Routes, Route, BrowserRouter} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Join from './pages/Join'
import BasicMap from './components/Maps'
import {CookiesProvider} from 'react-cookie'
import MeetingRoom from './pages/Meeting/Main'

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/maps" element={<BasicMap />} />
          <Route path="/meetingroom" element={<MeetingRoom />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
