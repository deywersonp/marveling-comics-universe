import { Flex, GridItem, Hide, IconButton, Text } from "@chakra-ui/react";

import { QuantityButtonGroup } from "../QuantityButtonGroup";

import { TbTrashFilled } from "react-icons/tb";

import { useCart } from "@/hooks/useCart";

import { formatPrice } from "@/utils/format";
import { ProductProps } from "@/types/product";

type InfoOnMobileProps = {
  product: ProductProps;
  onClick: () => void;
};

export const InfoOnMobile = ({
  product,
  onClick,
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
          amount={product.amount}
          onClickDecrement={handleProductDecrement}
          onClickIncrement={handleProductIncrement}
        />

        <Flex alignItems="center" w="100%">
          <Text mr="auto">
            {formatPrice(0)}
          </Text>

          <IconButton
            aria-label="Remover produto"
            icon={<TbTrashFilled size={25} />}
            variant="ghost"
            colorScheme="red"
            onClick={onClick}
          />
        </Flex>
      </GridItem>
    </Hide>
  )
};