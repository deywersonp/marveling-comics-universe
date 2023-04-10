import { GridItem, IconButton, Show } from "@chakra-ui/react";
import { TbTrashFilled } from "react-icons/tb";

type ActionsProps = {
  onClick: () => void;
};

export const Actions = ({ onClick }: ActionsProps) => {
  return (
    <Show above="md">
      <GridItem>
        <IconButton
          aria-label="Remover produto"
          icon={<TbTrashFilled size={25} />}
          variant="ghost"
          colorScheme="red"
          onClick={onClick}
        />
      </GridItem>
    </Show>
  )
};