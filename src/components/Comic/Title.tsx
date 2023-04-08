import { Text } from "@chakra-ui/react";

interface TitleProps {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <Text as="b" fontSize="sm" _groupHover={{ transition: 'color 0.3s', color: 'red' }}>
      {title}
    </Text>
  )
};