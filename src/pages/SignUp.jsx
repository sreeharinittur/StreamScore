import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { FirebaseApp } from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


function SignUp() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {user,signUp}=UserAuth()
    const navigate=useNavigate()

    const handleSubmit= async (e)=>{
        e.preventDefault()
        try{
            await signUp(email,password)
            navigate('/')

        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
    <div className='w-full h-screen'>
    <img
      className='hidden sm:block absolute w-full h-full object-cover'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      alt='/'
    />

    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4' >
                        <input  onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='p-3 my-2 bg-gray-700 rouded'></input>
                        <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' autoComplete='current-password' className='p-3 my-2 bg-gray-700 rouded'></input>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input type='checkbox' className='mr-2'></input>Remember me</p>
                            <p>Need Help?</p>

                        </div>
                        <p className='py-8'><span className='text-gray-600'>Already subscribed to NetFlix?   </span>{'  '} <Link to='/login'>Sign In</Link></p>

                    </form>

                </div>

            </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default SignUp