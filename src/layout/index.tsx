import { ReactNode } from "react";

import { Container } from "./Container";
import { Header } from "./Header";
import { Main } from "./Main";

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