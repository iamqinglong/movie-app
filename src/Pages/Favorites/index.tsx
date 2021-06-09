import React from "react";
import { RouteComponentProps } from "react-router-dom";
import IPage from "../../interfaces/page";

interface FavoriteRouteProps {}

export const Favorites: React.FC<
  IPage & RouteComponentProps<FavoriteRouteProps>
> = ({ name }) => {
  return (
    <>
      <p>{name}</p>
    </>
  );
};
