import { Text } from "@chakra-ui/react";
import { MarvelComicCreators } from "@/types/marvelComic";

interface CreatorsProps {
  creators: MarvelComicCreators;
};

export const Creators = ({ creators }: CreatorsProps) => {
  return (
    <Text fontSize="xs">
      {creators.items.map((creator, index) => {
        if (index > 0) {
          return `, ${creator.name}`
        }

        return creator.name
      })}
    </Text>
  )
};