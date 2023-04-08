type Url = {
  type: string;
  url: string;
};

type MarvelComicThumbnail = {
  path: string;
  extension: string;
};

type CreatorsItem = {
  resourceURI: string;
  name: string;
  role: string;
};

export type MarvelComicCreators = {
  items: CreatorsItem[];
};

export type MarvelComicProps = {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  creators: MarvelComicCreators;
  thumbnail: MarvelComicThumbnail;
  modified: Date;
  urls: Url[];
};

export type MarvelComicsResult = {
  attributionHTML: string;
  attributionText: string;
  copyright: string;
  data: {
    count: number;
    limit: number;
    offset: number;
    total: number;
    results: MarvelComicProps[];
  }
};