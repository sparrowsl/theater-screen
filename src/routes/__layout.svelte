<script>
  import "../tailwind.css";
  import Nav from "$lib/components/Nav.svelte";
</script>

<header class="container min-h-16 py-3 grid content-center mx-auto xl:max-w-5xl bg-slate-200 shadow">
  <Nav />
</header>

<main class="container mx-auto xl:max-w-5xl">
  <slot />
</main>

<footer class="container mx-auto xl:max-w-5xl py-5">
  <p class="text-slate-400 text-center italic">
    Made using the
    <a
      href="https://developers.themoviedb.org/3/getting-started/introduction"
      class="text-blue-500">TMDB API</a
    >
  </p>
</footer>

<style></style>
