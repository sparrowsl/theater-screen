<script context="module">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

  // import { upcoming } from "$lib/stores/store.js";

  // export async function load({ fetch }) {
  //   const response = await fetch(upcoming);
  //   const data = await response.json();

  //   if (response.ok) {
  //     return {
  //       props: {
  //         upcomingMovies: data.results,
  //       },
  //     };
  //   }
  // }
</script>

<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import Movies from "$lib/components/Movies.svelte";

  export let upcomingMovies;
</script>

<Movies movies={upcomingMovies} />
