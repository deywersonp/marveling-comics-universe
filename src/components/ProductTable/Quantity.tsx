import { GridItem, Show } from "@chakra-ui/react";
import { QuantityButtonGroup } from "../QuantityButtonGroup";

export const Quantity = () => {
  return (
    <Show above="md">
      <GridItem color="gray.600">
        <QuantityButtonGroup />
      </GridItem>
    </Show>
  )
};