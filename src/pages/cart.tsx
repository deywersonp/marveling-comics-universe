import Head from 'next/head'

import { Box } from '@chakra-ui/react'

import { Layout } from '@/layout'
import { ProductTable } from '@/components/ProductTable'

export default function Cart() {
  return (
    <>
      <Head>
        <title>Carrinho | Marveling Comics Universe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box w="100%" bgColor="white" p="4">
          <ProductTable>
            <ProductTable.About
              src="http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883.jpg"
              alt="Thumbnail"
              title="Superior Spider-Man Vol. 2: Otto-matic (Trade Paperback)"
              releaseDate="18/12/2019"
            />
            <ProductTable.Quantity />
            <ProductTable.Price />
            <ProductTable.Actions onClick={() => console.log('clicked')} />
            <ProductTable.InfoOnMobile onClick={() => console.log('clicked on mobile')} />

            <ProductTable.About
              src="http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883.jpg"
              alt="Thumbnail"
              title="Superior Spider-Man Vol. 2: Otto-matic (Trade Paperback)"
              releaseDate="18/12/2019"
            />
            <ProductTable.Quantity />
            <ProductTable.Price />
            <ProductTable.Actions onClick={() => console.log('clicked')} />
            <ProductTable.InfoOnMobile onClick={() => console.log('clicked on mobile')} />

            <ProductTable.About
              src="http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883.jpg"
              alt="Thumbnail"
              title="Superior Spider-Man Vol. 2: Otto-matic (Trade Paperback)"
              releaseDate="18/12/2019"
            />
            <ProductTable.Quantity />
            <ProductTable.Price />
            <ProductTable.Actions onClick={() => console.log('clicked')} />
            <ProductTable.InfoOnMobile onClick={() => console.log('clicked on mobile')} />

            <ProductTable.About
              src="http://i.annihil.us/u/prod/marvel/i/mg/c/f0/5df3fc8b3c883.jpg"
              alt="Thumbnail"
              title="Superior Spider-Man Vol. 2: Otto-matic (Trade Paperback)"
              releaseDate="18/12/2019"
            />
            <ProductTable.Quantity />
            <ProductTable.Price />
            <ProductTable.Actions onClick={() => console.log('clicked')} />
            <ProductTable.InfoOnMobile onClick={() => console.log('clicked on mobile')} />
          </ProductTable>
        </Box>
      </Layout>
    </>
  )
}
