import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, url }) {
  const page = Number(url.searchParams.get("page"));

  const response = await fetch(`/api/movies?page=${page}`);
  const { results } = await response.json();

  if (response.ok) return { movies: results };

  throw error(404, { message: "Could not load movies!" });
}
