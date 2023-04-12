import { useCallback, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head'

import { dehydrate } from 'react-query';

import { Box, Button, Flex, Grid, Text, useDisclosure } from '@chakra-ui/react'
import BeatLoader from 'react-spinners/BeatLoader';

import { Layout } from '@/layout'
import { Comic } from '@/components/Comic';
import { ComicDetailsModal } from '@/components/ComicDetailsModal';

import { getMarvelComicsByServerSide, useMarvelComics } from '@/hooks/useMarvelComics';
import { MarvelComicProps, MarvelComicsResult } from '@/types/marvelComic';
import { queryClient } from '@/services/queryClient';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedComic, setSelectedComic] = useState<MarvelComicProps | null>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useMarvelComics(currentPage);

  const allComicsData = data?.pages?.reduce((acc: MarvelComicsResult[], page) => acc.concat(page), []) || [];

  const handleOpenModal = useCallback((data: MarvelComicProps) => {
    setSelectedComic(data);
    onOpen();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Marveling Comics Universe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Box w="100%" bgColor="gray.900" p="4">
          {error ? (
            <Flex justify="center">
              <Text>Falha ao obter listagem de quadrinhos</Text>
            </Flex>
          ) : (
            <>
              <Grid
                w="100%"
                templateColumns={['repeat(2, 1fr)', null, 'repeat(3, 1fr)', 'repeat(6, 1fr)']}
                gap={4}
              >
                {allComicsData.map(comicsData => comicsData.data.results.map(comic => (
                  <Comic key={comic.id} data={comic} onClick={handleOpenModal} />
                )))}
              </Grid>

              {hasNextPage && (
                <Flex alignItems="center" justifyContent="center" mt={4}>
                  <Button
                    colorScheme='red'
                    isLoading={isFetchingNextPage}
                    spinner={<BeatLoader size={8} color='white' />}
                    onClick={() => {
                      fetchNextPage({ pageParam: currentPage + 1 })
                      setCurrentPage(prevState => prevState + 1)
                    }}
                    disabled={!hasNextPage}
                  >
                    Carregar Mais
                  </Button>
                </Flex>
              )}
            </>
          )}
        </Box>

        <ComicDetailsModal data={selectedComic} isOpen={isOpen} onClose={onClose} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await queryClient.prefetchQuery('comics', getMarvelComicsByServerSide)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
};
