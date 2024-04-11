import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import LandingPage from './pages/LandingPage/LandingPage'
import MainPage from './pages/MainPage/MainPage'
import SpotifyCallBackHandle from './pages/SpotifyCallBackHandlePage/spotifyCallBackHandePage'


function App() {
  const test = import.meta.env.VITE_BACKEND_URL;
  // console.log(test);
  return(
    <div className=' min-h-full justify-center flex items-center p-4 bg-zinc-800  overflow-x-auto'>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/callback" element={<SpotifyCallBackHandle />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
