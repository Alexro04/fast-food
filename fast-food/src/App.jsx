import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ui/Home"
import AppLayout from "./ui/AppLayout"
import Cart from './features/cart/Cart'
import Order, { loader as orderLoader } from './features/order/Order'
import Menu, { loader as menuLoader } from './features/menu/Menu'
import Error from './ui/Error'
import CreateOrder, { action as createOrderAction } from "./features/order/CreateOrder"

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/order/:orderId',
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />
        },
        {
          path: '/order/new',
          element: <CreateOrder />,
          action: createOrderAction
        },
        {
          path: '/menu',
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
