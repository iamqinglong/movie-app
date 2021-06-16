import { createState } from "@hookstate/core";
import { Movie } from "../interfaces";

interface IStore {
  favorites: Movie[];
  searchQuery: string;
}

const store = createState<IStore>({
  favorites: [],
  searchQuery: "",
});

export default store;
