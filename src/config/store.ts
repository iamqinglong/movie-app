import { createState } from "@hookstate/core";
import { Movie } from "../interfaces";

interface IStore {
  favorites: Movie[];
}

const store = createState<IStore>({
  favorites: [],
});

export default store;
