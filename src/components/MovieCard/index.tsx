import { useHookstate, none } from "@hookstate/core";
import React from "react";
import { Link } from "react-router-dom";
import store from "../../config/store";
import { Movie } from "../../interfaces";
interface MovieCardProps extends Movie {}

export const MovieCard: React.FC<MovieCardProps> = ({
  overview,
  original_title,
  backdrop_path,
  poster_path,
  id,
  ...rest
}) => {
  const { favorites } = useHookstate(store);
  const imageUrl = backdrop_path
    ? `${process.env.REACT_APP_IMAGE_URL}${backdrop_path}`
    : poster_path
    ? `${process.env.REACT_APP_IMAGE_URL}${poster_path}`
    : `images/blog/1.jpeg`;

  // const isFavorite = favorites.get().find((favorites) => favorites.id === id);
  const isFavorite = favorites
    .get()
    .findIndex((favorites) => favorites.id === id);
  console.log("isFavorite", isFavorite);
  const addToFavoriteHandler: React.FormEventHandler<HTMLButtonElement> = (
    event
  ) => {
    console.log("Adding");
    event.preventDefault();
    const favorite = {
      id,
      overview,
      original_title,
      backdrop_path,
      poster_path,
      ...rest,
    };
    favorites.merge([favorite]);
  };

  const removeToFavorite: React.FormEventHandler<HTMLButtonElement> = (
    event
  ) => {
    console.log("Removing");
    event.preventDefault();
    favorites[isFavorite].set(none);
  };

  return (
    <>
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <Link to={`/movie/${id}`} className="w-full block h-full">
          <img
            alt="blog"
            src={imageUrl}
            className="max-h-40 w-full object-cover"
          />
        </Link>

        <div className="bg-white dark:bg-gray-800 w-full p-4">
          <Link to={`/movie/${id}`}>
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {original_title}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md overflow-ellipsis overflow-hidden">
              {overview}
            </p>
          </Link>
          <div className="flex items-center mt-4">
            <div className="button-container flex justify-between mb-2">
              <button
                className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-green-200"
                onClick={
                  isFavorite >= 0 ? removeToFavorite : addToFavoriteHandler
                }
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
