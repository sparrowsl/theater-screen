<script>
  import Category from "$lib/components/Category.svelte";
  import Search from "./Search.svelte";
</script>

<nav
  class="container mx-auto flex flex-col items-center justify-between gap-2 px-1 sm:px-5 md:flex-row"
>
  <!-- Logo -->
  <a href="/" class="logo min-w-fit text-lg font-bold">Theater Screen</a>

  <!-- Search for a movie -->
  <Search />

  <!-- Filter movies by categories -->
  <Category />
</nav>
