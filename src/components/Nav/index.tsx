import React, { FC } from "react";
import { useHookstate } from "@hookstate/core";
import { Link, useLocation } from "react-router-dom";
import store from "../../config/store";

interface NavProps {
  // setQuery?: React.Dispatch<React.SetStateAction<string>>;
}

export const Nav: FC<NavProps> = () => {
  const location = useLocation();
  const { searchQuery } = useHookstate(store);
  return (
    <>
      <header>
        <nav className="bg-black dark:bg-gray-800  shadow py-4 ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
                      to="/favorites"
                    >
                      Favorites
                    </Link>
                  </div>
                </div>
              </div>
              {location.pathname === "/" && (
                <div className="block">
                  <div className="md:block -mr-2 flex">
                    <form
                      className="flex w-full max-w-sm space-x-3"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <div className=" relative ">
                        <input
                          onChange={(event) =>
                            searchQuery.set(event.target.value)
                          }
                          type="text"
                          id='"form-subscribe-Search'
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Search ..."
                        />
                      </div>
                    </form>
                  </div>
                  <div className="ml-4 flex items-center md:ml-6"></div>
                </div>
              )}
              <div className="-mr-2 flex md:hidden">
                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-8 w-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
                to="/favorites"
              >
                Favorites
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
