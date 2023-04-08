import { useCallback } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head'

import md5 from 'md5';

import { Box, Grid } from '@chakra-ui/react'

import { Layout } from '@/layout'
import { Comic } from '@/components/Comic';

import { api } from '@/services/api';
import { MarvelComicProps, MarvelComicsResult } from '@/types/marvelComic';

interface HomeProps {
  marvelComicsResult: MarvelComicsResult | null;
};

export default function Home({ marvelComicsResult }: HomeProps) {
  const handleOpenModal = useCallback((data: MarvelComicProps) => {
    console.log(data);
  }, []);

  return (
    <>
      <Head>
        <title>Marveling Comics Universe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box w="100%" bgColor="gray.900" p="4">
          {!!marvelComicsResult && (
            <Grid
              w="100%"
              templateColumns={['repeat(2, 1fr)', null, 'repeat(3, 1fr)', 'repeat(6, 1fr)']}
              gap={4}
            >
              {marvelComicsResult.data.results.map(comic => (
                <Comic key={comic.id} data={comic} onClick={handleOpenModal} />
              ))}
            </Grid>
          )}
        </Box>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let marvelComicsResult = null;

  try {
    const timestamp = new Date().getTime();
    const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY!;
    const privateKey = process.env.MARVEL_API_PRIVATE_KEY!;

    const hash = md5(timestamp + privateKey + publicKey);

    const { data } = await api.get<MarvelComicsResult>(`/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=30&orderBy=title,issueNumber`);
    marvelComicsResult = data;
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      marvelComicsResult,
    },
    revalidate: 60 * 60 * 12 //12 hours
  }
};
