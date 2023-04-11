import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { CartProvider } from '@/context/cart'

import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CartProvider>
  )
};
