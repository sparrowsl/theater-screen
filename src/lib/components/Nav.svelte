<script>
  import { goto } from "$app/navigation";
  import Category from "$lib/components/Category.svelte";

  let searchValue = "";
  function submitSearch() {
    if (searchValue) {
      goto(`/search/${searchValue}`);
    }

    // searchValue = "" // Clear the search input
  }
</script>

<nav
  class="container mx-auto flex flex-col items-center justify-between gap-2 px-1 sm:px-5 md:flex-row"
>
  <!-- Logo -->
  <div class="logo min-w-fit text-lg font-bold">
    <a href="/">Theater Screen</a>
  </div>

  <!-- Search for a movie -->
  <form
    on:submit|preventDefault={submitSearch}
    class="search relative flex justify-center rounded-md bg-slate-300"
  >
    <input
      type="search"
      bind:value={searchValue}
      placeholder="Search for a movie"
      class="bg-inherit px-4 py-2 shadow-sm"
    />
    <button type="submit" class=" pr-2">
      <img src="/search-line.svg" alt="search button" />
    </button>
  </form>

  <!-- Filter movies by categories -->
  <Category />
</nav>

<style>
</style>
