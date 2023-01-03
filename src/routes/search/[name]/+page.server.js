import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
  const response = await fetch(`/api/search?&query=${params.name}`);
  const { results } = await response.json();

  if (response.ok) return { searchedMovies: results };

  throw error(404, { message: `No ${params.name} movies found!!` });
}
