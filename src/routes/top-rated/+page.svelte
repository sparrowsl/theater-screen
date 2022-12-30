<script context="module">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

  // import { topRated } from "$lib/stores/store.js";

  // export async function load({ fetch }) {
  //   const response = await fetch(topRated);
  //   const data = await response.json();

  //   if (response.ok) {
  //     return {
  //       props: {
  //         topRatedMovies: data.results,
  //       },
  //     };
  //   }
  // }
</script>

<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import Movies from "$lib/components/Movies.svelte";

  export let topRatedMovies;
</script>

<Movies movies={topRatedMovies} />
