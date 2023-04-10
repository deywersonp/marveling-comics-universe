import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface MainProps {
  children: ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return (
    <Flex
      as="main"
      w="100%"
      maxWidth={1440}
      my="8"
      px="8"
      boxSizing="border-box"
    >
      {children}
    </Flex>
  )
};