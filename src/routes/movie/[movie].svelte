<script context="module">
  const APIKey = "46c773b6fa9990476c24cfba87dfce3d";
  const movieURL = `https://api.themoviedb.org/3/movie`;

  export async function load({ fetch, params }) {
    const response = await fetch(
      `${movieURL}/${params.movie}?api_key=${APIKey}&language=en-US`
    );
    const data = await response.json();

    if (response.ok) {
      return {
        props: {
          movie: data,
        },
      };
    }
  }
</script>

<script>
  export let movie;
  console.log(movie);
</script>

<svelte:head>
  <title>{movie.title} - Theater Screen</title>
</svelte:head>

<article class="min-h-[70vh] py-2 px-4 md:px-6 flex flex-col content-cente">
  <!-- Go back home -->
  <a
    href="/"
    class="shadow-md hover:shadow hover:text-blue-500 bg-slate-200 max-w-fit py-1 px-3 my-3 rounded text-blue-800"
  >
    ← back
  </a>

  <div class="my-4">
    <img
      src="https://image.tmdb.org/t/p/original{movie.backdrop_path}"
      alt={movie.title}
      class="object-cover"
    />
    <small class="block md:text-sm text-center italic text-gray-700">{movie.tagline}</small>
  </div>
  <!-- Title of movie -->
  <h1 class="text-center text-xl md:text-2xl font-bold">{movie.title}</h1>
  <!-- Line break -->
  <hr class="my-2" />

  <section class="desc mt-4">
    <!-- Summary -->
    <div>
      <h4 class="font-bold text-xl mb-1">Plot</h4>
      <p>{movie.overview}</p>
      <!-- Movie genres (label) -->
      <ul class="flex flex-wrap gap-3 mt-4">
        {#each movie.genres as genre}
          <li class="bg-slate-200 px-2 py-1 rounded text-green-700 shadow-md">
            {genre.name}
          </li>
        {/each}
      </ul>
    </div>

    <!-- Extra -->
    <div class="extra mt-5">
      <h4 class="font-bold text-xl mb-2">Extra Details</h4>

      <p><b class="text-gray-700 font-meduim">Budget:</b> ${movie.budget}</p>
      <p><b class="text-gray-700 font-meduim">Revenue:</b> ${movie.revenue}</p>
      <p>
        <b class="text-gray-700 font-meduim">Runtime:</b>
        {movie.runtime} mins
      </p>
      <p>
        <b class="text-gray-700 font-meduim">Rating:</b>
        {movie.vote_average}✨
      </p>
      <p>
        <b class="text-gray-700 font-meduim">Released On:</b>
        {movie.release_date}
      </p>
      <p><b class="text-gray-700 font-meduim">Produced By:</b></p>
      <ul>
        {#each movie.production_companies as company}
          <li class="indent-10">- {company.name}</li>
        {/each}
      </ul>
      <!-- </p> -->
      <p><b class="text-gray-700 font-meduim">Languages:</b></p>
      <ul class="">
        {#each movie.spoken_languages as language}
          <li class="indent-10">- {language.english_name}</li>
        {/each}
      </ul>
      <!-- </p> -->
    </div>
  </section>
</article>
