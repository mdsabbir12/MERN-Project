import React, { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Faq from './components/faq'
// import Footer from './components/Footer'
// import Body1 from './components/Body1'
// import Body2 from './components/Body2'
// import Body3 from './components/Body3'
// import Build from './components/Build'
// import Body4 from './components/Body4'

export const backendurl= "http://localhost:4000"



export default function App() {
  const [token,setToken]= useState('')
  return (
    <div>
      <ToastContainer/>
      {
        token === "" ? (<Login setToken={setToken} />) : (<Home setToken={setToken} />)
      }
      
    </div>
  )
}
