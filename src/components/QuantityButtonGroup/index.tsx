import { Button, ButtonGroup, Input, useNumberInput } from "@chakra-ui/react"

export const QuantityButtonGroup = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 5,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <ButtonGroup maxW='140px' isAttached>
      <Button {...dec}>-</Button>
      <Input {...input}
        borderRadius="0"
        disabled={true}
        _disabled={{
          style: {
            color: 'inherit'
          }
        }} />
      <Button {...inc}>+</Button>
    </ButtonGroup>
  )
}