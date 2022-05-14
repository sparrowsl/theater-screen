<script>
  import Movie from "./Movie.svelte";

  export let movies;
</script>

<section class="movies p-3 md:p-5 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))]">
  {#each movies as movie}
    <Movie {movie} />
  {:else}
  <div class="text-center py-5">
    <h1 class="text-gray-700 text-2xl mb-3">No Movies found</h1>
    <p>Go <a href="/" class="italic text-blue-500 hover:underline ml-1">Back home</a></p>
  </div>
  {/each}
</section>

<style>
</style>
