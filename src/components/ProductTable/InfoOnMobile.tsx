import { Flex, GridItem, Hide, IconButton, Text } from "@chakra-ui/react";

import { QuantityButtonGroup } from "../QuantityButtonGroup";

import { TbTrashFilled } from "react-icons/tb";

import { formatPrice } from "@/utils/format";

type InfoOnMobileProps = {
  onClick: () => void;
  subTotal?: number | undefined;
};

export const InfoOnMobile = ({
  subTotal = 0,
  onClick,
}: InfoOnMobileProps) => {
  return (
    <Hide above="md">
      <GridItem color="gray.600">
        <QuantityButtonGroup />

        <Flex alignItems="center" w="100%">
          <Text mr="auto">
            {formatPrice(subTotal)}
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