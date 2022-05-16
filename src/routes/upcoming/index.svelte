<script context="module">
  import { upcoming } from "$lib/stores/store.js";

  export async function load({ fetch }) {
    const response = await fetch(upcoming);
    const data = await response.json();

    if (response.ok) {
      return {
        props: {
          upcomingMovies: data.results,
        },
      };
    }
  }
</script>

<script>
  import Movies from "$lib/components/Movies.svelte";

  export let upcomingMovies;
</script>

<Movies movies={upcomingMovies} />
