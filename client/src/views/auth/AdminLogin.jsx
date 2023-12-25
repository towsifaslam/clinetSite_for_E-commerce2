import React, { useEffect, useState } from 'react'
 import { admin_login, messageClear } from '../../store/reducer/authReucer'
 import { useDispatch , useSelector } from 'react-redux'
 import {PropagateLoader}from'react-spinners'
 import tost from'react-hot-toast'
 import {useNavigate} from'react-router-dom'
export default function AdminLogin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
     const [state,setState] = useState({
 
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
        dispatch(admin_login(state))
        console.log(state)
    }
    const {loader,errrorMessage,successMessage} = useSelector(state =>state.auth)
     const overrideStyle = {
        display:'flex',
        margin:'0 auto',
        height:'24px',
        justifyContent:'center',
        alignItems:'center'
     }
     useEffect(()=>{
        if(errrorMessage){
            tost.error(errrorMessage)
            dispatch(messageClear())
        }if(successMessage){
            tost.success(successMessage)
               dispatch(messageClear())
               navigate('/')
            }
     },[errrorMessage,successMessage])

  return (
    <div className=' min-w-full min-h-screen bg-[#161d31] flex justify-center items-center'>
        <div className='w-[350px] text-[#d0d2d6]   p-2'>
            <div className='bg-[#283046] p-4 rounded-md'>
                <div className='h-[70px] flex justify-center items-center'>
                    <div className='w-[180px] h-[50px]'>
                        <img className='w-full h-full' src="http://localhost:5173/images/logo.png" alt="" />
                    </div>
                </div>
                <form  onSubmit={submit}>
                   
                    <div className='flex flex-col w-full gap-1 mb-3  '>
                        <label htmlFor="email">Email</label>
                        <input onChange={inputHandle} value={state.email} type="email" className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' placeholder='email' id='email' name='email' required />
                    </div>
                    <div className='flex flex-col w-full gap-1 mb-3  '>
                        <label htmlFor="password">password</label>
                        <input onChange={inputHandle} value={state.password}  type="password" className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' placeholder='********' id='password' name='password' required />
                    </div>
                  
                   <button disabled={loader  } className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg  text-white rounded-md px-7 py-2 mb-3' type='submit'> {
                    loader ? <PropagateLoader cssOverride={overrideStyle} />:'Login'
                   }</button>
                  
                </form>
              
            </div>
        </div>
    </div>
  )
}
