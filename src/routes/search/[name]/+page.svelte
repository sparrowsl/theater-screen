<script context="module">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

  // const APIKey = import.meta.env.VITE_APIKey;
  // const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&include_adult=false`;

  // export async function load({ fetch, params }) {
  //   const response = await fetch(`${searchURL}&query=${params.name}`);
  //   const data = await response.json();

  //   if (response.ok) {
  //     return {
  //       props: {
  //         searchedMovies: data.results,
  //       },
  //     };
  //   }
  // }
</script>

<script>
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import Movies from "$lib/components/Movies.svelte";

  export let searchedMovies;
</script>

<section>
  <Movies movies={searchedMovies} />
</section>
