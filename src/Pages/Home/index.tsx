import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { MovieList } from "../../components/MovieList";
import { useMovies, useSearchMovies } from "../../config/hooks";
import logging from "../../config/logging";
import { Movie } from "../../interfaces";
import IPage from "../../interfaces/page";

interface MatchParams {}

export const Home: React.FC<IPage & RouteComponentProps<MatchParams>> = ({
  name,
}) => {
  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  const { movies: searchMovies } = useSearchMovies(query);
  const [movieList, setMovieList] = useState<Movie[]>();
  useEffect(() => {
    logging.info(`[${name}] Loading`);
  }, [name]);
  useEffect(() => {
    console.log(movies?.results);
    if (movies?.results) {
      setMovieList(movies?.results);
    }

    if (searchMovies?.results) {
      setMovieList(searchMovies?.results);
    }
  }, [movies, searchMovies]);

  // const searchHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  //   mutate();
  // };
  return (
    <>
      <div className="w-full bg-white p-12">
        <div className="header flex items-end justify-between mb-12">
          <div className="title">
            <p className="text-4xl font-bold text-gray-800 mb-4">Movies</p>
          </div>
          <div className="text-end">
            <form
              className="flex w-full max-w-sm space-x-4"
              // onSubmit={searchHandler}
            >
              <div className=" relative ">
                <input
                  onChange={(event) => setQuery(event.target.value)}
                  type="text"
                  id='"form-subscribe-Search'
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Search here..."
                />
              </div>
              {/* <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Search
              </button> */}
            </form>
          </div>
        </div>
        {movieList && <MovieList movies={movieList} />}
      </div>
    </>
  );
};
