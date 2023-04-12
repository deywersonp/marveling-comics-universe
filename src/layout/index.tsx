import { ReactNode } from "react";

import { Flex } from "@chakra-ui/react";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
interface LayoutProps {
  children: ReactNode;
};

const attributionText = `Data provided by Marvel. © ${new Date().getFullYear()} MARVEL`

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />

      <Main>
        {children}
      </Main>

      <footer>
        <Flex alignItems="center" justifyContent="center">
          {attributionText}
        </Flex>
      </footer>
    </Container>
  )
};