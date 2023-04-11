import Head from 'next/head'
import { Fragment } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react'

import { Layout } from '@/layout'
import { ProductTable } from '@/components/ProductTable'

import { useCart } from '@/hooks/useCart';

export default function Cart() {
  const { cart, removeProduct } = useCart();

  return (
    <>
      <Head>
        <title>Carrinho | Marveling Comics Universe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box w="100%" bgColor="white" p="4">
          {cart.length === 0 ? (
            <Flex alignItems="center" justifyContent="center">
              <Text color="gray.800">
                Não há produtos no carrinho
              </Text>
            </Flex>
          )
            : (
              <ProductTable>
                {cart.map(product => {
                  return (
                    <Fragment key={product.comic.id}>
                      <ProductTable.About
                        src={`${product.comic.thumbnail.path}.${product.comic.thumbnail.extension}`}
                        alt={`${product.comic.title} Thumbnail`}
                        title={product.comic.title}
                        releaseDate={product.comic.dates.find(d => d.type === 'onsaleDate')?.date}
                      />
                      <ProductTable.Quantity product={product} />
                      <ProductTable.Price />
                      <ProductTable.Actions onClick={() => removeProduct(product.comic.id)} />
                      <ProductTable.InfoOnMobile
                        product={product}
                        onClick={() => removeProduct(product.comic.id)}
                      />
                    </Fragment>
                  )
                })}
              </ProductTable>
            )}
        </Box>
      </Layout>
    </>
  )
}
