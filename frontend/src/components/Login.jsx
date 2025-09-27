import React, { useState } from 'react'
import { backendurl } from '../App';
import { toast } from "react-toastify"
import axios from "axios"

const Login = ({ setToken }) => {
  const [currentstate, setcurrentstate] = useState("Login");
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('') // ✅ spelling ঠিক করলাম
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const fromsubmission = async (event) => {
    event.preventDefault()
    try {
      if (currentstate === "Sign Up") {
        const response = await axios.post(
          backendurl + '/api/user/register/',
          { firstname, lastname, email, password }
        )

        if (response.data.success) {
          setToken(response.data.token)   // ✅ এখন কাজ করবে
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(
          backendurl + '/api/user/login/',
          { email, password }
        )

        if (response.data.success) {
          setToken(response.data.token)
          toast.success(response.data.message)
        } else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='flex items-center bg-amber-100 justify-center min-h-screen '>
      <form onSubmit={fromsubmission} className='bg-white w-full max-w-lg mt-10 mx-auto p-8 rounded-2xl shadow-2xl space-y-6'>
        <div className='flex justify-center'>
          <p className='text-3xl font-bold'>{currentstate}</p>
        </div>

        {currentstate === "Login" ? null : (
          <div>
            <input
              className='px-4 py-3 border-1 rounded-2xl mr-4 w-[48%]'
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder='First Name'
              required
            />
            <input
              className='px-4 py-3 border-1 rounded-2xl w-[48%]'
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder='Last Name'
              required
            />
          </div>
        )}

        <input
          className='px-4 py-3 border-1 rounded-2xl mr-4 w-full'
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> <br />

        <input
          className='px-4 py-3 border-1 rounded-2xl mr-4 w-full'
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className='flex items-center'>
          <p className='mr-20'>Forgot Password?</p>
          {
            currentstate === "Login"
              ? (<p onClick={() => setcurrentstate("Sign Up")}>Create account</p>)
              : (<p onClick={() => setcurrentstate("Login")}>Login here</p>)
          }
        </div>

        <button className='bg-green-600 py-3 rounded-xl text-white text-[18px] font-bold w-full shadow-green-400 ' type='submit'>
          {currentstate === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  )
}

export default Login
