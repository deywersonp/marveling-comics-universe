import { Box, GridItem } from "@chakra-ui/react";

import { Creators } from "./Creators";
import { Title } from "./Title";
import { Thumbnail } from "./Thumbnail";

import { MarvelComicProps } from "@/types/marvelComic";

interface ComicProps {
  data: MarvelComicProps;
  onClick: (data: MarvelComicProps) => void;
};

export const Comic = ({ data, onClick }: ComicProps) => {
  return (
    <GridItem data-group>
      <Box role="button" onClick={() => onClick(data)}>

        <Thumbnail
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={`${data.title} Thumbnail`}
        />

        <Title title={data.title} />

        <Creators creators={data.creators} />
      </Box>
    </GridItem>
  )
};