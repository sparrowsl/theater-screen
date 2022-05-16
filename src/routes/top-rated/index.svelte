<script context="module">
  import { topRated } from "$lib/stores/store.js";

  export async function load({ fetch }) {
    const response = await fetch(topRated);
    const data = await response.json();

    if (response.ok) {
      return {
        props: {
          topRatedMovies: data.results,
        },
      };
    }
  }
</script>

<script>
  import Movies from "$lib/components/Movies.svelte";

  export let topRatedMovies;
</script>

<Movies movies={topRatedMovies} />
