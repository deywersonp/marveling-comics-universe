import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

import backgroundImage from '@/assets/images/background.jpg';

interface ContainerProps {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <Flex
      w="100%"
      minHeight="100vh"
      h="100%"
      mx="auto"
      position="relative"
      flexDir="column"
      alignItems="center"
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
        opacity: 0.25,
        bgImage: backgroundImage.src,
        bgSize: "cover",
        bgRepeat: "no-repeat",
        bgAttachment: "fixed",
      }}
    >
      {children}
    </Flex>
  )
};