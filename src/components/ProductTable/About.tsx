import { Box, GridItem, Text } from "@chakra-ui/react";
import { Thumbnail } from "../Thumbnail";

type AboutProps = {
  src: string;
  alt: string;
  title: string;
  releaseDate?: string | undefined;
};

export const About = ({
  src,
  alt,
  title,
  releaseDate,
}: AboutProps) => {
  return (
    <GridItem color="gray.600" flexDir="row" display="flex" gap={4}>
      <Box w="80px">
        <Thumbnail
          src={src}
          alt={alt}
        />
      </Box>

      <Box>
        <Text fontSize={["sm", "lg"]} fontWeight="bold">
          {title}
        </Text>

        {!!releaseDate && (
          <Text fontSize={["sm", "md"]}>
            Data de Lançamento: {releaseDate}
          </Text>
        )}
      </Box>
    </GridItem>
  )
};