import Link from 'next/link';
import { Flex, IconButton } from '@chakra-ui/react';

import { Logo } from '@/components/Logo';

import { HiShoppingBag } from 'react-icons/hi';

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      height={["40", "20"]}
      mx="auto"
      mt="4"
      px="8"
      align="center"
      flexDir={["column", "row"]}
      justifyContent={["center", "flex-start"]}
    >
      <Link href="/">
        <Logo />
      </Link>

      <IconButton
        as={Link}
        href="/cart"
        aria-label="Ir para o carrinho"
        icon={<HiShoppingBag size={30} />}
        variant="ghost"
        colorScheme='red'
        borderRadius="full"
        ml="auto"
        mt={["5", "0"]}
      />
    </Flex>
  )
};