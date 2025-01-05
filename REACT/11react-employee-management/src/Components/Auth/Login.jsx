import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] =useState()
    const submitHandler = (event) => {
        event.preventDefault()
        console.log(email, password)
    }
  return (
    <div className='flex items-center justify-center bg-zinc-800'>
        <div className='border-2 border-red-600 p-20'>
            <form onSubmit={submitHandler} className='flex items-center justify-center flex-col gap-4'>
                 <input value={email} onChange={(e) => {setEmail(e.target.value)}} className='required border-2 border-blue-500 rounded-full px-5 py-3 text-xl text-white outline-none bg-transparent placeholder:text-white' type="email" placeholder='Enter your email' />
                 <input value={password} onChange={(e) => {setPassword(e.target.value)}} className='required border-2 border-blue-500 rounded-full px-5 py-3 text-xl text-white outline-none bg-transparent placeholder:text-white' type="password" placeholder='Enter password' />
                 <button className='border-none rounded-full px-5 py-3 text-xl text-black outline-none bg-blue-800'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login