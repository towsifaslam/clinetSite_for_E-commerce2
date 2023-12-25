import {useRoutes} from'react-router-dom'
const Routers = ({allRoutes})=>{
    const routes = useRoutes([...allRoutes])
    return routes
}

export default Routers