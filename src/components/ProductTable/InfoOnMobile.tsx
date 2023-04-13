import { Flex, GridItem, Hide, Text } from "@chakra-ui/react";

import { QuantityButtonGroup } from "../QuantityButtonGroup";
import { TrashButton } from "../TrashButton";

import { useCart } from "@/hooks/useCart";

import { formatPrice } from "@/utils/formatPrice";
import { ProductProps } from "@/types/product";

type InfoOnMobileProps = {
  product: ProductProps;
  onClick: () => void;
  disableButtons?: boolean;
};

export const InfoOnMobile = ({
  product,
  onClick,
  disableButtons,
}: InfoOnMobileProps) => {
  const { updateProductAmount } = useCart();

  const handleProductIncrement = () => {
    updateProductAmount({ comicId: product.comic.id, amount: product.amount + 1 });
  };

  const handleProductDecrement = () => {
    updateProductAmount({ comicId: product.comic.id, amount: product.amount - 1 });
  };

  return (
    <Hide above="md">
      <GridItem color="gray.600">
        <QuantityButtonGroup
          disabled={disableButtons}
          amount={product.amount}
          onClickDecrement={handleProductDecrement}
          onClickIncrement={handleProductIncrement}
        />

        <Flex alignItems="center" w="100%">
          <Text mr="auto">
            {formatPrice(0)}
          </Text>

          <TrashButton
            isDisabled={disableButtons}
            onClick={onClick}
          />
        </Flex>
      </GridItem>
    </Hide>
  )
};