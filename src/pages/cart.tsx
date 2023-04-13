import Head from 'next/head'
import { Fragment, useState, useCallback } from 'react';

import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react'

import { Layout } from '@/layout'
import { ProductTable } from '@/components/ProductTable'
import { Map } from '@/components/Map';

import { useCart } from '@/hooks/useCart';
import { formatDate } from '@/utils/formatDate';

const deliveryTime = '15 dias';

export default function Cart() {
  const { cart, removeProduct } = useCart();
  const toast = useToast();

  const [isSavingOrder, setIsSavingOrder] = useState(false);
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [isOpenMap, setIsOpenMap] = useState(false);
  const [deliveryConfirmed, setDeliveryConfirmed] = useState(false);

  const handleChangeAddress = useCallback((value: string | undefined) => {
    if (isSavingOrder) {
      return;
    };

    setAddress(value);
  }, [isSavingOrder]);

  const handleToggleOpenMap = () => {
    setIsOpenMap(prevState => !prevState)
  };

  const handleConfirmDelivery = () => {
    try {
      setIsSavingOrder(true);

      if (!address) {
        toast({
          title: 'Oops!',
          description: `É necessário informar um endereço de entrega!`,
          status: 'warning',
          duration: 7000,
          position: 'top-right',
          isClosable: true,
        })

        setIsSavingOrder(false);
        return;
      }

      setTimeout(() => {
        toast({
          title: 'Pedido Cadastrado com sucesso!',
          description: `O pedido será entregue no endereço informado no prazo de até ${deliveryTime} úteis.`,
          status: 'success',
          duration: 7000,
          position: 'top-right',
          isClosable: true,
        })

        setIsSavingOrder(false);
        handleToggleOpenMap();
        setDeliveryConfirmed(true);
      }, 2000);
    } catch (err) {
      console.error(err);
      setIsSavingOrder(false);
    };
  };

  return (
    <>
      <Head>
        <title>Carrinho | Marveling Comics Universe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Box w="100%" bgColor="white" p="4">
          {cart.length === 0
            ? (
              <Flex alignItems="center" justifyContent="center">
                <Text color="gray.800">
                  Não há produtos no carrinho
                </Text>
              </Flex>
            ) :
            (
              <>
                <ProductTable>
                  {cart.map(product => {
                    const releaseDate = product.comic.dates.find(d => d.type === 'onsaleDate')?.date;

                    return (
                      <Fragment key={product.comic.id}>
                        <ProductTable.About
                          src={`${product.comic.thumbnail.path}.${product.comic.thumbnail.extension}`}
                          alt={`${product.comic.title} Thumbnail`}
                          title={product.comic.title}
                          releaseDate={!releaseDate ? undefined : formatDate({ date: releaseDate, format: 'date' })}
                        />
                        <ProductTable.Quantity
                          product={product}
                          disableButtons={isSavingOrder}
                        />
                        <ProductTable.Price />
                        <ProductTable.Actions
                          disableButton={isSavingOrder}
                          onClick={() => removeProduct(product.comic.id)}
                        />
                        <ProductTable.InfoOnMobile
                          disableButtons={isSavingOrder}
                          product={product}
                          onClick={() => removeProduct(product.comic.id)}
                        />
                      </Fragment>
                    )
                  })}
                </ProductTable>

                <Flex mt="4" flexDir="column">
                  {!!address && (
                    <Box color="gray.600" mb={4}>
                      <Text>
                        Endereço de Entrega: <Text as="span" fontWeight="bold">{address}</Text>
                      </Text>
                      <Text>
                        Prazo de Entrega: <Text as="span" color="red" fontWeight="bold">até {deliveryTime} úteis</Text>
                      </Text>
                    </Box>
                  )}

                  {isOpenMap && (
                    <>
                      <Map onChangeAddress={handleChangeAddress} disabled={isSavingOrder} />

                      <Box mt="4" ml="auto">
                        <Button
                          isLoading={isSavingOrder}
                          colorScheme="green"
                          onClick={handleConfirmDelivery}
                        >
                          Confirmar Entrega
                        </Button>
                      </Box>
                    </>
                  )}

                  {!isOpenMap && !deliveryConfirmed && (
                    <Box mt="4" ml="auto">
                      <Button
                        colorScheme="red"
                        onClick={handleToggleOpenMap}
                      >
                        Informar Endereço de Entrega
                      </Button>
                    </Box>
                  )}
                </Flex>
              </>
            )}
        </Box>
      </Layout>
    </>
  )
}
