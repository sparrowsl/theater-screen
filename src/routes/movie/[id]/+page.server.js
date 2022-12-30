import { error } from "@sveltejs/kit";

export async function load({ fetch, params }) {
  const res = await fetch(`/api/movies/${params.id}`);
  const data = await res.json();

  if (res.ok) return { movie: data };

  throw error(404, { message: "COuld not find that movie!" });
}
