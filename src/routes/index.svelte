<script context="module">
  import { popular } from "$lib/stores/store.js";

  export async function load({ fetch }) {
    const response = await fetch(popular);
    const data = await response.json();

    if (response.ok) {
      return {
        props: {
          popularMovies: data.results,
        },
      };
    }
  }
</script>

<script>
  import Movies from "$lib/components/Movies.svelte";

  export let popularMovies;
</script>

<Movies movies={popularMovies} />
