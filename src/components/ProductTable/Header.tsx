import { GridItem, Show } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Show above="md">
      <GridItem color="gray.800" fontWeight="bold">
        Produto
      </GridItem>
      <GridItem color="gray.800" fontWeight="bold">
        Quantidade
      </GridItem>
      <GridItem color="gray.800" fontWeight="bold">
        Subtotal
      </GridItem>
      <GridItem color="gray.800" fontWeight="bold">
        Ações
      </GridItem>
    </Show>
  )
};