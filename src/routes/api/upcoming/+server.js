import { API_Key } from "$env/static/private";
import { json } from "@sveltejs/kit";

// link for upcoming movies
export const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_Key}&language=en-US&page=1`;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ fetch, url }) => {
  // Get the page number to fetch or get the first page
  const page = Number(url.searchParams.get("page")) || 1;

  const response = await fetch(`${upcoming}&page=${page}`);
  const data = await response.json();

  if (response.ok) return json(data);
};
