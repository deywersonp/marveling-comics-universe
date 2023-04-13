import { useInfiniteQuery } from "react-query";
import md5 from "md5";

import { api } from "../services/api";
import { MarvelComicsResult } from "@/types/marvelComic";

const limit = 30;
const defaultQuery = `limit=${limit}&orderBy=title,issueNumber`;

export const getMarvelComicsByServerSide = async () => {
  const timestamp = new Date().getTime();
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY!;
  const privateKey = process.env.MARVEL_API_PRIVATE_KEY!;

  const hash = md5(timestamp + privateKey + publicKey);

  const { data } = await api.get<MarvelComicsResult>(`/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&${defaultQuery}`);


  return {
    pages: [data],
    pageParams: [],
  };
};

export const getMarvelComics = async (page: number) => {
  let nextPage = true;
  const offset = !page ? 0 : (page - 1) * 30;

  const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY!;
  const { data } = await api.get<MarvelComicsResult>(`/v1/public/comics?apikey=${publicKey}&&${defaultQuery}&offset=${offset}`);

  const totalPages = Math.round(data.data.total / 30);

  if (page > totalPages) {
    nextPage = false
  }

  return ({
    ...data,
    nextPage,
  });
};

export const useMarvelComics = (page: number) => {
  return useInfiniteQuery('comics', ({ pageParam = page }) => getMarvelComics(pageParam), {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
}