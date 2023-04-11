type MarvelComicUrl = {
  type: string;
  url: string;
};

type MarvelComicDates = {
  type: 'onsaleDate';
  date: string;
};

type MarvelComicThumbnail = {
  path: string;
  extension: string;
};

type MarvelComicCreatorsItem = {
  resourceURI: string;
  name: string;
  role: string;
};

export type MarvelComicCreators = {
  items: MarvelComicCreatorsItem[];
};

export type MarvelComicProps = {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  creators: MarvelComicCreators;
  thumbnail: MarvelComicThumbnail;
  modified: Date;
  dates: MarvelComicDates[];
  urls: MarvelComicUrl[];
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