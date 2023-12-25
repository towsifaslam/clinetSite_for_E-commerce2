import {AiFillDashboard,AiOutlineShopping, AiOutlineShoppingCart}from'react-icons/ai'
import {BiCategory,BiLoaderCircle} from'react-icons/bi'
import {BsCurrencyDollar} from'react-icons/bs'

import {CiChat1} from'react-icons/ci'
import {FiUser} from'react-icons/fi'
import {} from'react-icons'



export const allNav = [
    {
        id:1,
        title:'Dashboard',
        icon:<AiFillDashboard/>,
        role:'admin',
        path:'/admin/dashboard'
    },
    {
        id:2,
        title:'Order',
        icon:<AiOutlineShoppingCart/>,
        role:'admin',
        path:'/admin/dashboard/order'
    },
    {
        id:3,
        title:'Category',
        icon:<BiCategory/>,
        role:'admin',
        path:'/admin/dashboard/category'
    },
    {
        id:4,
        title:'Sellers',
        icon:<FiUser/>,
        role:'admin',
        path:'/admin/dashboard/sellers'
    },
    {
        id:5,
        title:'Payment request',
        icon:<BsCurrencyDollar/>,
        role:'admin',
        path:'/admin/dashboard/payment-request'
    }
    , 
    {
        id:6,
        title:'Deactive Sellers',
        icon:<FiUser/>,
        role:'admin',
        path:'/admin/dashboard/deactiveSeller'
    },
    {
        id:6,
        title:' Sellers request',
        icon:<FiUser/>,
        role:'admin',
        path:'/admin/dashboard/sellers-request'
    }
    , {
        id:7,
        title:'Chat Seller',
        icon:<CiChat1/>,
        role:'admin',
        path:'/admin/dashboard/chat-seller'
    }
]