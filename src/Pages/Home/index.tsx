import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import useSWR from "swr";
import { MovieCard } from "../../components/MovieCard";
import fetch from "../../config/fetch";
import logging from "../../config/logging";
import IPage from "../../interfaces/page";

interface MatchParams {}

export const Home: React.FC<IPage & RouteComponentProps<MatchParams>> = ({
  name,
}) => {
  const { data } = useSWR<string[]>(
    "https://api.themoviedb.org/3/search/movie?api_key=8a1b36d62eb27c6b8c84a8545d209e70&query=t",
    fetch
  );
  console.log(data);
  useEffect(() => {
    logging.info(`[${name}] Loading`);
  }, [name]);
  return (
    <>
      <div className="w-full bg-white p-12">
        <div className="header flex items-end justify-between mb-12">
          <div className="title">
            <p className="text-4xl font-bold text-gray-800 mb-4">Movies</p>
            {/* <p className="text-2xl font-light text-gray-400">
              All article are verified by 2 experts and valdiate by the CTO
            </p> */}
          </div>
          <div className="text-end">
            <form className="flex w-full max-w-sm space-x-3">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Enter a title"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          <MovieCard />
        </div>
      </div>
    </>
  );
};
