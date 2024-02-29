import {Routes, Route, BrowserRouter} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Join from './pages/Join'
import Main from './pages/Meeting/Main'
import RangePicker from './pages/RangePicker'
import TeamDetail from './pages/Meeting/TeamDetail'
import BasicMap from './components/Maps'
import MyPage from './pages/MyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />

        <Route path="/teamDetail" element={<TeamDetail />} />
        <Route path="/rangePicker" element={<RangePicker />} />
        <Route path="/maps" element={<BasicMap />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
