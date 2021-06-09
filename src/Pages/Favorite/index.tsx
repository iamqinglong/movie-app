import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { FavoriteMatchParams } from "../../interfaces";
import IPage from "../../interfaces/page";

export const Favorite: React.FC<
  IPage & RouteComponentProps<FavoriteMatchParams>
> = ({ name }) => {
  return (
    <>
      <p>{name}</p>
    </>
  );
};
