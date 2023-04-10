import { ReactNode } from 'react';

import { Grid } from "@chakra-ui/react";

import { Header } from "./Header";
import { About } from './About';
import { Quantity } from './Quantity';
import { Price } from './Price';
import { Actions } from './Actions';
import { InfoOnMobile } from './InfoOnMobile';

type ProductTableProps = {
  children: ReactNode;
};

export const ProductTable = ({ children }: ProductTableProps) => {
  return (
    <Grid templateColumns={["1fr", "1fr", "40% 30% 20% 10%"]} columnGap={1} rowGap={4}>
      <Header />

      {children}
    </Grid>
  )
};

ProductTable.About = About;
ProductTable.Price = Price;
ProductTable.Quantity = Quantity;
ProductTable.Actions = Actions;
ProductTable.InfoOnMobile = InfoOnMobile;