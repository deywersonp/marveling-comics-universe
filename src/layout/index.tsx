import { ReactNode } from "react";

import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

interface LayoutProps {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />

      <Main>
        {children}
      </Main>
    </Container>
  )
};