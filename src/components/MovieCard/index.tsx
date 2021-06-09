import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../interfaces";

interface MovieCardProps extends Movie {}

export const MovieCard: React.FC<MovieCardProps> = ({
  overview,
  original_title,
  backdrop_path,
  poster_path,
  id,
}) => {
  const imageUrl = backdrop_path
    ? `${process.env.REACT_APP_IMAGE_URL}${backdrop_path}`
    : poster_path
    ? `${process.env.REACT_APP_IMAGE_URL}${poster_path}`
    : `images/blog/1.jpeg`;

  return (
    <>
      <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <Link to={`/movie/${id}`} className="w-full block h-full">
          <img
            alt="blog"
            src={imageUrl}
            className="max-h-40 w-full object-cover"
          />
          <div className="bg-white dark:bg-gray-800 w-full p-4">
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {original_title}
            </p>
            <p className="text-gray-400 dark:text-gray-300 font-light text-md overflow-ellipsis overflow-hidden">
              {overview}
            </p>
            <div className="flex items-center mt-4">
              <div className="button-container flex justify-between mb-2">
                <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-green-200">
                  Add to favorites
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
