import { useQuery } from "react-query";
import md5 from "md5";

import { api } from "../services/api";
import { MarvelComicsResult } from "@/types/marvelComic";

export const getMarvelComicsByServerSide = async () => {
  const timestamp = new Date().getTime();
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY!;
  const privateKey = process.env.MARVEL_API_PRIVATE_KEY!;

  const hash = md5(timestamp + privateKey + publicKey);

  const { data } = await api.get<MarvelComicsResult>(`/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=30&orderBy=title,issueNumber`);

  return data;
};

export const getMarvelComics = async () => {
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY!;
  const { data } = await api.get<MarvelComicsResult>(`/v1/public/comics?apikey=${publicKey}&limit=30&orderBy=title,issueNumber`);

  return data;
};

export const useMarvelComics = () => {
  return useQuery('comics', getMarvelComics, {
    staleTime: 60 * 60 * 12, //12 hours
  });
}