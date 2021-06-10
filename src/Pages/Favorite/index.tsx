import React from "react";
import { useHookstate } from "@hookstate/core";
import { RouteComponentProps } from "react-router-dom";
import { MovieList } from "../../components/MovieList";
import { Nav } from "../../components/Nav";
import store from "../../config/store";
import { FavoriteMatchParams } from "../../interfaces";
import IPage from "../../interfaces/page";

export const Favorite: React.FC<
  IPage & RouteComponentProps<FavoriteMatchParams>
> = ({ name }) => {
  const { favorites } = useHookstate(store);

  return (
    <>
      <Nav />
      <div className="w-full bg-white p-12">
        <MovieList movies={favorites.get() || []} />
      </div>
    </>
  );
};
