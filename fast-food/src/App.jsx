import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./ui/Home"
import AppLayout from "./ui/AppLayout"
import Cart from './features/cart/Cart'
import Order from './features/order/Order'
import Menu, { loader as menuLoader } from './features/menu/Menu'

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
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
          path: '/order/new',
          element: <Order />
        },
        {
          path: '/menu',
          element: <Menu />,
          loader: menuLoader
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
