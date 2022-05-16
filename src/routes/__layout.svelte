<script>
  import "../tailwind.css";
  import Nav from "$lib/components/Nav.svelte";
</script>

<header
  class="min-h-16 xl:max-w-5x grid content-center bg-slate-200 py-3 shadow-sm"
>
  <Nav />
</header>

<main class="mx-auto xl:max-w-5xl">
  <slot />
</main>

<footer class="container mx-auto py-5 xl:max-w-5xl">
  <p class="text-center italic text-slate-400">
    Made using the
    <a
      href="https://developers.themoviedb.org/3/getting-started/introduction"
      class="text-blue-500">TMDB API</a
    >
  </p>
</footer>

<style></style>
