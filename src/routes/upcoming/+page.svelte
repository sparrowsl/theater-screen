<script>
  import Movies from "$lib/components/Movies.svelte";

  export let data;
</script>

<Movies movies={data.upcomingMovies} />
