<script>
  import { page } from "$app/stores";
  import Movies from "$lib/components/Movies.svelte";

  export let data;
  $: currentPage = $page.url.searchParams.get("page") * 1;
</script>

<article>
  <Movies movies={data.movies} />

  <!-- Pagination -->
  <div class="flex items-center justify-evenly">
    <a href="/?page={currentPage < 2 ? 1 : currentPage - 1}"> Previous </a>
    <a href="/?page={currentPage > data.pages ? data.pages : currentPage + 1}">
      Next
    </a>
  </div>
</article>
