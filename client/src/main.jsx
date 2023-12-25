import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/index.js'
import {Provider}from'react-redux'
import {Toaster } from'react-hot-toast'
import './index.css'
import {BrowserRouter}from'react-router-dom'
const App = lazy(()=>import('./App.jsx'))
ReactDOM.createRoot(document.getElementById('root')).render(
 
   <BrowserRouter>
     <Provider store={store}>
     <Suspense fallback='loading...'>
   <App />
   <Toaster 
    toastOptions={{
      position:'bottom-left',
      style:{
         background:'#283046',
         color:'white'
      }
    }}
   />
   </Suspense>
     </Provider>

   </BrowserRouter>
 
)
