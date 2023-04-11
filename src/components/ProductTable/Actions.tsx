import { GridItem, Show } from "@chakra-ui/react";
import { TrashButton } from "../TrashButton";

type ActionsProps = {
  onClick: () => void;
  disableButton?: boolean;
};

export const Actions = ({ onClick, disableButton }: ActionsProps) => {
  return (
    <Show above="md">
      <GridItem>
        <TrashButton
          isDisabled={disableButton}
          onClick={onClick}
        />
      </GridItem>
    </Show>
  )
};