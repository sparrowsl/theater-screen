<script>
  import { categories, selectedCategory } from "$lib/stores/store.js";
  import { goto } from "$app/navigation";

  function getMovieCategory(category) {
    $selectedCategory = category.replace(" ", "_");

    if (category === "popular") {
      goto(`/`);
    } else {
      goto(`/${category.replace(" ", "-")}`);
    }
  }
</script>

<div class="mt-2">
  <span class="block text-center text-sm italic text-gray-400"
    >Select a movie category</span
  >
  <select
    class="category rounded bg-slate-300 px-4 py-2 shadow sm:mt-0"
    on:change={(e) => getMovieCategory(e.target.value)}
  >
    {#each $categories as category}
      {#if category === $selectedCategory}
        <option value={category.toLowerCase()} selected>{category}</option>
      {:else}
        <option value={category.toLowerCase()}>{category} Movies</option>
      {/if}
    {/each}
  </select>
</div>

<style></style>
