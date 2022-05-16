<script>
  import { categories } from "$lib/stores/store.js";
</script>

<div class="mt-2">
  <!-- <span class="block text-center text-sm italic text-gray-400"
    >Select a category</span
  > -->
  <select
    class="category rounded bg-slate-300 px-4 py-2 shadow sm:mt-0"
    on:change={(e) => console.log(e.target.value)}
  >
    {#each categories as category}
      <option value={category.toLowerCase()}>{category} Movies</option>
    {/each}
  </select>
</div>

<style></style>
