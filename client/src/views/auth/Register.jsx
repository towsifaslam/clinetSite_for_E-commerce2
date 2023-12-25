import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineGoogle, AiOutlineGooglePlus} from'react-icons/ai'
export default function Register() {
    const [state,setState] = useState({
        name:'',
        email:'',
        password:''
    })
    const inputHandle = (e)=>{
          setState({
            ...state,
            [e.target.name]:e.target.value
          })
     
    }
    const submit = (e)=>{
        e.preventDefault()
        console.log(state)
    }
  return (
    <div className=' min-w-full min-h-screen bg-[#161d31] flex justify-center items-center'>
        <div className='w-[350px] text-[#d0d2d6]   p-2'>
            <div className='bg-[#283046] p-4 rounded-md'>
                <h2 className='text-xl mb-3'>Welcom to e-commerce</h2>
                <p className='text-sm mb-3'>Please register to your account and start you bussiness</p>
                <form onSubmit={submit}>
                    <div className='flex flex-col w-full gap-1 mb-3  '>
                        <label htmlFor="name">Name</label>
                        <input onChange={inputHandle} value={state.name} type="text" className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' placeholder='name' name='name' id='name' required />
                    </div>
                    <div className='flex flex-col w-full gap-1 mb-3  '>
                        <label htmlFor="email">Email</label>
                        <input onChange={inputHandle} value={state.email} type="email" className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' placeholder='email' name='email' id='email' required />
                    </div>
                    <div className='flex flex-col w-full gap-1 mb-3  '>
                        <label htmlFor="password">password</label>
                        <input onChange={inputHandle} value={state.password} type="password" className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' placeholder='********' name='password' id='password' required />
                    </div>
                    <div className='flex items-center w-full gap-x-3 mb-3 '>
                        <input type="checkbox" className='w-4 h-4  text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500 '  id='checkbox' required />
                        <label htmlFor="checkbox">I agree to privacy policy & terms</label>
                    </div>
                   <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg  text-white rounded-md px-7 py-2 mb-3' type='submit'>Sign up</button>
                 
                </form>
                <div className='flex items-center mb-3 gap-3 justify-center'>
                    <p>Already have an account ? <Link to='/login'>Signin here</Link></p>
                   </div>
                   <div className='w-full flex justify-center items-center mb-3'>
                    <div className='w-[45%] bg-slate-700 items-center h-[2px]'></div>
                    <div className='px-2'>0r</div>
                    <div className='w-[45%] bg-slate-700 items-center h-[2px]'></div>
                   </div>
                   <div className='flex justify-center items-center gap-3'> 
                    <div className='w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'> <span><AiOutlineGooglePlus/></span></div>
                    <div className='w-[35px] h-[35px] flex rounded-md bg-indigo-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'> <span><AiOutlineGooglePlus/></span></div>  <div className='w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'> <span><AiOutlineGooglePlus/></span></div>  <div className='w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'> <span><AiOutlineGooglePlus/></span></div>
                   </div>
            </div>
        </div>
    </div>
  )
}
