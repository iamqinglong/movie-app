import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { MovieList } from "../../components/MovieList";
import { useMovies, useSearchMovies } from "../../config/hooks";
import logging from "../../config/logging";
import { HomeMatchParams, Movie } from "../../interfaces";
import IPage from "../../interfaces/page";
// import { Nav } from "../../components/Nav";
import { Layout } from "../../components/Layout";
import store from "../../config/store";
import { useHookstate } from "@hookstate/core";

export const Home: React.FC<IPage & RouteComponentProps<HomeMatchParams>> = ({
  name,
}) => {
  const { movies } = useMovies();
  // const [query, setQuery] = useState("");
  const { searchQuery } = useHookstate(store);
  const { movies: searchMovies } = useSearchMovies(searchQuery.get());
  const [movieList, setMovieList] = useState<Movie[]>();

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

  return (
    <>
      {/* <Nav setQuery={setQuery} /> */}
      <Layout>
        <div className="w-full bg-white p-12">
          <MovieList movies={movieList || []} />
        </div>
      </Layout>
    </>
  );
};
