import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {
  return(
    <div className='p-4 h-screen flex items-center justify-center bg-zinc-800'>
      <Register/>
    </div>
  )
}

export default App
