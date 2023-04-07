import { Flex } from '@chakra-ui/react';
import { Logo } from '@/components/Logo';

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="20"
      mx="auto"
      mt="4"
      px="8"
      align="center"
    >
      <Logo />
    </Flex>
  )
};