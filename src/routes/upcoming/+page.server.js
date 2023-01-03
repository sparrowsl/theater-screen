import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const response = await fetch("/api/upcoming");
  const { results } = await response.json();

  if (response.ok) return { upcomingMovies: results };

  throw error(404, { message: "No movies found!!" });
}
