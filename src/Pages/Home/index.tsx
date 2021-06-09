import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { MovieList } from "../../components/MovieList";
import { useMovies, useSearchMovies } from "../../config/hooks";
import logging from "../../config/logging";
import { Movie } from "../../interfaces";
import IPage from "../../interfaces/page";
import { useState as useHookstate } from "@hookstate/core";
import store from "../../config/store";
interface MatchParams {}

export const Home: React.FC<IPage & RouteComponentProps<MatchParams>> = ({
  name,
}) => {
  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  const { movies: searchMovies } = useSearchMovies(query);
  const [movieList, setMovieList] = useState<Movie[]>();
  const { favorites } = useHookstate(store);

  useEffect(() => {
    logging.info(`[${name}] Loading`);
  }, [name]);

  useEffect(() => {
    if (movies?.results) {
      setMovieList(movies?.results);
    }

    if (searchMovies?.results) {
      setMovieList(searchMovies?.results);
    }
  }, [movies, searchMovies]);

  useEffect(() => {
    if (favorites.length) {
      favorites.get().map((fav) => console.log("fav.id", fav.id));
    }
  }, [favorites]);

  return (
    <>
      <div className="w-full bg-white p-12">
        <div className="header flex items-end justify-between mb-12">
          <div className="title">
            <p className="text-4xl font-bold text-gray-800 mb-4">Movies</p>
          </div>
          <div className="text-end">
            <form className="flex w-full max-w-sm space-x-4">
              <div className=" relative ">
                <input
                  onChange={(event) => setQuery(event.target.value)}
                  type="text"
                  id='"form-subscribe-Search'
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Search here..."
                />
              </div>
            </form>
          </div>
        </div>
        <MovieList movies={movieList || []} />
      </div>
    </>
  );
};
