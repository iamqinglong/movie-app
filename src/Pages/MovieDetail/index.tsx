import { none, useHookstate } from "@hookstate/core";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { useMovieDetail } from "../../config/hooks";
import store from "../../config/store";
import { Movie, MovieDetailMatchParams } from "../../interfaces";
import IPage from "../../interfaces/page";

export const MovieDetail: React.FC<
  IPage & RouteComponentProps<MovieDetailMatchParams>
> = ({ match }) => {
  const { details } = useMovieDetail(match.params.id);
  const { favorites } = useHookstate(store);
  const imageUrl = details?.backdrop_path
    ? `${process.env.REACT_APP_IMAGE_URL}${details?.backdrop_path}`
    : details?.poster_path
    ? `${process.env.REACT_APP_IMAGE_URL}${details.poster_path}`
    : `images/blog/1.jpeg`;
  const isFavorite = favorites
    .get()
    .findIndex((favorites) => favorites.id === details?.id);

  const addToFavorite: React.FormEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (details) {
      const favorite: Movie = {
        genre_ids: details?.genres.map((i) => i.id),
        ...details,
      };
      console.log(favorite);
      favorites.merge([favorite]);
    }
  };

  const removeToFavorite: React.FormEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    favorites[isFavorite].set(none);
  };
  return (
    <>
      <Nav />
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-full lg:w-1/2 max-w-4xl overflow-hidden m-4 flex justify-between transition duration-300 transform  rounded shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl">
          <div className="md:flex-shrink-0">
            <img
              className="md:w-56 object-cover h-full w-full"
              src={`${imageUrl}`}
              alt="A Quiet Place movie poster"
            />
          </div>
          <div className="flex flex-col flex-grow px-8 py-4 bg-gray-800">
            <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
              {details?.title}
            </h3>
            <span className="movie--year text-xl lg:text-sm lg:mb-4 text-white">
              {details?.release_date}
            </span>
            <div className="flex-grow">
              <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">
                {details?.overview}
              </p>
            </div>
            <div className="button-container flex justify-between mb-2">
              <button
                className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-green-200"
                onClick={isFavorite >= 0 ? removeToFavorite : addToFavorite}
              >
                {isFavorite >= 0 ? "Remove to favorite" : "Add to favorites"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
