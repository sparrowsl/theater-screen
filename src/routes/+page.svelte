<script>
  import { page } from "$app/stores";
  import Movie from "../lib/components/Movie.svelte";

  export let data;
  $: currentPage = $page.url.searchParams.get("page") * 1;
</script>

<article>
  <section
    class="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-4 p-3"
  >
    {#each data.movies as movie}
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
  <!-- Pagination -->
  <div class="flex items-center justify-evenly">
    <a href="/?page={currentPage < 2 ? 1 : currentPage - 1}"> Previous </a>
    <a href="/?page={currentPage > data.pages ? data.pages : currentPage + 1}">
      Next
    </a>
  </div>
</article>
