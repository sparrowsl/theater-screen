<script>
  import Movie from "./MovieCard.svelte";

  export let movies;
</script>

<section
  class="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4 p-3"
>
  {#each movies as movie}
    <Movie {movie} />
  {:else}
    <div class="text-center py-5">
      <h1 class="text-gray-700 text-2xl mb-3">No Movies found</h1>
      <p>
        Go <a href="/" class="italic text-blue-500 hover:underline ml-1">
          Back home
        </a>
      </p>
    </div>
  {/each}
</section>
