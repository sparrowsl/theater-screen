<script>
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import { categories, category } from "$lib/stores/store.js";

  function getMovieCategory(val) {
    $category = val.replace(" ", "-");
    $category === "popular" ? goto(`/`) : goto(`/${$category}`);
  }

  let value = "popular";
  $: if (browser && getMovieCategory(value));
</script>

<select class="rounded bg-slate-300 px-4 py-2 shadow sm:mt-0" bind:value>
  {#each $categories as category}
    <option value={category.toLowerCase()}>{category} Movies</option>
  {/each}
</select>
