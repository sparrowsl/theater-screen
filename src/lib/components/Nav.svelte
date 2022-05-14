<script>
  import {goto} from "$app/navigation"

  let searchValue = ""
  function submitSearch(){
    if (searchValue) {
      goto(`/search/${searchValue}`)
    }

    // Clear the search input
    searchValue = ""
  }
</script>

<nav class="flex flex-col gap-2 md:flex-row justify-between items-center px-1 sm:px-5">
  <div class="logo min-w-fit font-bold text-lg">
    <a href="/">Theater Screen</a>
  </div>

  <form on:submit|preventDefault="{submitSearch}"
    class="search relative bg-slate-300 rounded-md flex justify-center">
    <input type="search" bind:value="{searchValue}"
      placeholder="Search for a movie"
      class="px-4 py-2 shadow-sm bg-inherit"
    />
    <button type="submit" class=" pr-2">
      <img src="/search-line.svg" alt="search button">
    </button>
  </form>
</nav>

<style>
</style>
