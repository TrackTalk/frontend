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
import Navbar from './components/navbar/Navbar'
import useRefreshToken from './hooks/auth/useRefreshToken'
import SinglePostPage from './pages/SinglePostPage/SinglePostPage'


function App() {
  const test = import.meta.env.VITE_BACKEND_URL;
  useRefreshToken();
  // console.log(test);
  return(
    <div className=' min-h-full min-w-full justify-center flex flex-col items-center p-2 bg-zinc-800'>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/callback" element={<SpotifyCallBackHandle />} />
        <Route path="/post/:postId" element={<SinglePostPage/>} />
      </Routes>
      <Toaster/>
      
    </div>
  )
}

export default App
