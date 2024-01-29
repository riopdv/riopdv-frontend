import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import HomeButton from 'pages/home/components/HomeButton'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'home',
        element: <HomeButton/>,
      },
    ],
  },
])

export default function Routes() {
  return <RouterProvider router={router} />
}
