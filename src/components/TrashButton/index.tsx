import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { TbTrashFilled } from "react-icons/tb";

interface TrashButtonProps extends Omit<IconButtonProps, "aria-label"> {};

export const TrashButton = ({ ...rest }: TrashButtonProps) => {
  return (
    <IconButton
      {...rest}
      icon={<TbTrashFilled size={25} />}
      variant="ghost"
      colorScheme="red"
      aria-label="Remover produto"
    />
  )
};