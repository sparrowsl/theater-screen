<script>
  export let movie;
</script>

<figure class="movie-card">
  <img
    src="https://image.tmdb.org/t/p/w500{movie.poster_path}"
    alt={movie.title}
    class="object-cover rounded transition-transform hover:scale-105"
  />
  <figcaption class="py-2">
    <h3 class="font-bold text-sm hover:text-blue-800">
      <a href="/movie/{movie.id}">{movie.title || movie.original_name}</a>
    </h3>
    <p class="italic text-xs">{movie.release_date || movie.first_air_date}</p>
  </figcaption>
</figure>

<style>
</style>
