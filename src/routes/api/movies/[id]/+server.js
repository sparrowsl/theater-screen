import { API_Key } from "$env/static/private";
import { json } from "@sveltejs/kit";

const url = `https://api.themoviedb.org/3/movie`;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ fetch, params }) => {
  const response = await fetch(
    `${url}/${params.id}?api_key=${API_Key}&language=en-US`
  );
  const data = await response.json();

  if (response.ok) return json(data);
};
