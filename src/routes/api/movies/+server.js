import { API_Key } from "$env/static/private";
import { json } from "@sveltejs/kit";

// link for popular movies
export const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US`;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ fetch, url }) => {
  // Get the page number to fetch or get the first page
  const page = Number(url.searchParams.get("page")) || 1;

  const response = await fetch(`${popular}&page=${page}`);
  const data = await response.json();

  if (response.ok) return json(data);
};
