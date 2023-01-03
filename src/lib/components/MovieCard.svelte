<script>
  import { fly } from "svelte/transition";

  export let movie;
</script>

<figure in:fly={{ y: 200 }}>
  <img
    src="https://image.tmdb.org/t/p/w500{movie.poster_path}"
    alt={movie.title}
    class="rounded object-cover transition-transform hover:scale-105"
  />
  <figcaption class="py-2">
    <h3 class="mb-1 text-sm font-bold hover:text-blue-800">
      <a href="/movie/{movie.id}">{movie.title || movie.original_name}</a>
    </h3>
    <p class="text-xs italic">{movie.release_date || movie.first_air_date}</p>
  </figcaption>
</figure>
