import { Box, GridItem } from "@chakra-ui/react";

import { Thumbnail } from "../Thumbnail";
import { Creators } from "./Creators";
import { Title } from "./Title";

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
          _groupHover={{
            transition: 'transform 0.3s',
            transform: 'translateY(-1%)'
          }}
        />

        <Title title={data.title} />

        <Creators creators={data.creators} />
      </Box>
    </GridItem>
  )
};