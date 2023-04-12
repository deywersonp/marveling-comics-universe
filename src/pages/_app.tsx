import type { AppProps } from 'next/app'
import { QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'

import { CartProvider } from '@/context/cart'

import { queryClient } from '@/services/queryClient';
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ChakraProvider theme={theme}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </ChakraProvider>
      </CartProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
};
