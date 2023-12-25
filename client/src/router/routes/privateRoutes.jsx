import {adminRoutes} from'./addminRoutes'
import {sellerRoutes}from'./sellerRoutes'
export const privateRoutes = [
    ...adminRoutes,
    ...sellerRoutes,
]