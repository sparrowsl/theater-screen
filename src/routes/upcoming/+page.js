import { upcoming } from "$lib/stores/store.js";

export async function load({ fetch }) {
  const response = await fetch(upcoming);
  const data = await response.json();

  if (response.ok) {
    return {
  upcomingMovies: data.results,
};
  }
}
