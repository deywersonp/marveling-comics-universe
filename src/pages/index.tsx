import Head from 'next/head'
import { Layout } from '@/layout'
import { Box, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marveling Comics Universe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box w="100%" bgColor="gray.900" p="4">
          <Text>
            Hello World
          </Text>
        </Box>
      </Layout>
    </>
  )
}
