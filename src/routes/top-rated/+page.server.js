import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch("/api/top-rated");
  const { results } = await response.json();

  if (response.ok) return { topRatedMovies: results };

  throw error(404, { message: "No movies found!!" });
}
