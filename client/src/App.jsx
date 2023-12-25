import { useEffect, useState } from 'react' 
import './App.css'
import Routers from'./router/Router'
import publicRoutes from './router/routes/publicRoutes'
import { getRoutes } from './router/routes'

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  useEffect(()=>{
    const routes = getRoutes()
     setAllRoutes([...allRoutes,routes])
  },[])
  return  <Routers allRoutes={allRoutes }/>
}

export default App
