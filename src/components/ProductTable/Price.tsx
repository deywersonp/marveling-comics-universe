import { formatPrice } from "@/utils/format";
import { GridItem, Show, Text } from "@chakra-ui/react";

type PriceProps = {
  value?: number | undefined;
}

export const Price = ({ value = 0 }: PriceProps) => {
  return (
    <Show above="md">
      <GridItem color="gray.600">
        <Text>
          {formatPrice(value)}
        </Text>
      </GridItem>
    </Show>
  )
};