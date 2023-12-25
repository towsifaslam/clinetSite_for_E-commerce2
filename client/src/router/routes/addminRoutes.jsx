
import { lazy } from "react";
const ChateSeller = lazy(()=>import("../../views/admin/ChateSeller")) ;
const DeactiveSeller = lazy(()=>import("../../views/admin/DeactiveSeller"));
const SellerRequest   = lazy(()=>import("../../views/admin/SellerRequest"));
const Sellers  = lazy(()=>import("../../views/admin/Sellers"));
const Category = lazy(() => import('../../views/admin/Category'))
const Orders = lazy(() => import('../../views/admin/Orders'))
const PaymentRequest = lazy(() => import('../../views/admin/PaymentRequest'))
const SellerDetails = lazy(() => import('../../views/admin/SellerDetails'))



const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'))
export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element: <AdminDashboard />,
        role: 'admin'
    },

    {
        path: 'admin/dashboard/order',
        element: <Orders />,
        role: 'admin'
    },{
        path: 'admin/dashboard/category',
        element: <Category />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/sellers',
        element: <Sellers />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/payment-request',
        element: <PaymentRequest />,
        role: 'admin'
    }, {
        path: 'admin/dashboard/sellers-request',
        element: <SellerRequest />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/deactiveSeller',
        element: <DeactiveSeller />,
        role: 'admin'
    }
    ,
    {
        path: 'admin/dashboard/sellers-request',
        element: <SellerRequest />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/sellers/details/:sellerId',
        element: <SellerDetails />,
        role: 'admin'
    },
    {
        path: 'admin/dashboard/chat-seller',
        element: <ChateSeller />,
        role: 'admin'
    }


]