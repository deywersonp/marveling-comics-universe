import { GridItem, Show } from "@chakra-ui/react";
import { QuantityButtonGroup } from "../QuantityButtonGroup";

import { useCart } from "@/hooks/useCart";

import { ProductProps } from "@/types/product";

type QuantityProps = {
  product: ProductProps;
};

export const Quantity = ({ product }: QuantityProps) => {
  const { updateProductAmount } = useCart();

  const handleProductIncrement = () => {
    updateProductAmount({ comicId: product.comic.id, amount: product.amount + 1 });
  };

  const handleProductDecrement = () => {
    updateProductAmount({ comicId: product.comic.id, amount: product.amount - 1 });
  };

  return (
    <Show above="md">
      <GridItem color="gray.600">
        <QuantityButtonGroup
          amount={product.amount}
          onClickDecrement={handleProductDecrement}
          onClickIncrement={handleProductIncrement}
        />
      </GridItem>
    </Show>
  )
};