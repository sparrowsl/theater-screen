<script>
  import { enhance } from "$app/forms";

  let value = "";
</script>

<form
  action="/search?/search"
  method="POST"
  class="search relative flex justify-center rounded-md bg-slate-300"
  use:enhance
>
  <input
    type="search"
    bind:value
    name="search"
    placeholder="Search for a movie"
    class="bg-inherit px-4 py-2 shadow-sm"
  />
  <button type="submit" class="pr-2">
    <img src="/search-line.svg" alt="search button" />
  </button>
</form>
