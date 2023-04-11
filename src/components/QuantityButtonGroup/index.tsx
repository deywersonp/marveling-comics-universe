import { Button, ButtonGroup, Input } from "@chakra-ui/react"

type QuantityButtonGroupProps = {
  amount: number;
  onClickDecrement: () => void;
  onClickIncrement: () => void;
  disabled?: boolean;
};

export const QuantityButtonGroup = ({
  amount,
  onClickDecrement,
  onClickIncrement,
  disabled,
}: QuantityButtonGroupProps) => {

  return (
    <ButtonGroup maxW='140px' isAttached>
      <Button onClick={onClickDecrement} isDisabled={disabled || amount === 1}>-</Button>
      <Input
        value={amount}
        borderRadius="0"
        disabled={true}
        _disabled={{
          style: {
            color: 'inherit'
          }
        }} />
      <Button onClick={onClickIncrement} isDisabled={disabled || amount === 5}>+</Button>
    </ButtonGroup>
  )
}