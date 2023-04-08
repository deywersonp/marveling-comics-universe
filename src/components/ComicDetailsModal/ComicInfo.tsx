import { Text } from "@chakra-ui/react";

interface ComicInfoProps {
  label: string;
  content: string | number | undefined;
};

export const ComicInfo = ({ label, content }: ComicInfoProps) => {
  return (
    <Text fontSize={["sm", "xs"]} textAlign="justify">
      <Text as="span" color="gray.800">
        {label}:
      </Text>
      {' '}
      <Text as="span" color="blue.600">
        {content}
      </Text>
    </Text>
  )
};