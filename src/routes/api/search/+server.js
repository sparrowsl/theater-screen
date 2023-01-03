import { API_Key } from "$env/static/private";
import { json } from "@sveltejs/kit";

// link for top-rated movies
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&language=en-US&include_adult=false`;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ fetch, url }) => {
  const response = await fetch(
    `${searchURL}&query=${url.searchParams.get("query")}`
  );
  const data = await response.json();

  if (response.ok) return json(data);
};
