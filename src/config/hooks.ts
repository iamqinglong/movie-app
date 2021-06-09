import useSWR from "swr";
import { MovieDetail, MovieResults } from "../interfaces";
import fetch from "./fetch";

export function useMovies() {
  const { data, error, mutate } = useSWR<MovieResults>(
    `${process.env.REACT_APP_MOVIE_URL}/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=1`,
    fetch
  );

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useMovieDetail(id: string) {
  const { data, error, mutate } = useSWR<MovieDetail>(
    `${process.env.REACT_APP_MOVIE_URL}/3/movie/${id}?api_key=8a1b36d62eb27c6b8c84a8545d209e70`,
    fetch
  );

  return {
    details: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useSearchMovies(query: string) {
  const { data, error, mutate } = useSWR<MovieResults>(
    `${process.env.REACT_APP_MOVIE_URL}/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${query}`,
    fetch
  );

  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
