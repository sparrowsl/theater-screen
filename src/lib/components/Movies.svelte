<script>
  import Movie from "./Movie.svelte";

  export let movies;
</script>

<section class="movies p-3 md:p-5 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
  {#each movies as movie}
    <Movie {movie} />
  {/each}
</section>

<style>
</style>
