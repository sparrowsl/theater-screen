
import { topRated } from "$lib/stores/store.js";

export async function load({ fetch }) {
  const response = await fetch(topRated);
  const data = await response.json();

  if (response.ok) {
    return {
  topRatedMovies: data.results,
};
  }
}
