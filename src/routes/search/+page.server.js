import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  search: async ({ request }) => {
    const form = await request.formData();
    const search = form.get("search");

    throw redirect(302, `/search/${search}`);
  },
};
