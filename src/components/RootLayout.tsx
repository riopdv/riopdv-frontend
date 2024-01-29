import { ChakraProvider } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <ChakraProvider>
      <Outlet />
    </ChakraProvider>
  )
}
