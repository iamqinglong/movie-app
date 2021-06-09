import React from "react";
import { Movie } from "../../interfaces";
import { MovieCard } from "../MovieCard";

interface MovieListProps {
  movies: Movie[];
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </>
  );
};
