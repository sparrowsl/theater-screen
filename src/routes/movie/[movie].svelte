<script context="module">
  import { APIKey } from "$lib/stores/store.js";
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
</script>

<svelte:head>
  <title>{movie.title} - Theater Screen</title>
</svelte:head>

<article class="content-cente flex min-h-[70vh] flex-col py-2 px-4 md:px-6">
  <!-- Go back home -->
  <a
    href="/"
    class="my-3 max-w-fit rounded bg-slate-200 py-1 px-3 text-blue-800 shadow-md hover:text-blue-500 hover:shadow"
  >
    ← back
  </a>

  <div class="my-4">
    <img
      src="https://image.tmdb.org/t/p/original{movie.backdrop_path}"
      alt={movie.title}
      class="object-cover"
    />
    <small class="block text-center italic text-gray-700 md:text-sm"
      >{movie.tagline}</small
    >
  </div>
  <!-- Title of movie -->
  <h1 class="text-center text-xl font-bold md:text-2xl">{movie.title}</h1>
  <!-- Line break -->
  <hr class="my-2" />

  <section class="desc mt-4">
    <!-- Summary -->
    <div>
      <h4 class="mb-1 text-xl font-bold">Plot</h4>
      <p>{movie.overview}</p>
      <!-- Movie genres (label) -->
      <ul class="mt-4 flex flex-wrap gap-3">
        {#each movie.genres as genre}
          <li class="rounded bg-slate-200 px-2 py-1 text-green-700 shadow-md">
            {genre.name}
          </li>
        {/each}
      </ul>
    </div>

    <!-- Extra -->
    <div class="extra mt-5">
      <h4 class="mb-2 text-xl font-bold">Extra Details</h4>

      <p>
        <b class="font-meduim text-gray-700">Budget:</b>
        ${movie.budget.toLocaleString("en-US")}
      </p>
      <p>
        <b class="font-meduim text-gray-700">Revenue:</b>
        ${movie.revenue.toLocaleString("en-US")}
      </p>
      <p>
        <b class="font-meduim text-gray-700">Runtime:</b>
        {movie.runtime} mins
      </p>
      <p>
        <b class="font-meduim text-gray-700">Rating:</b>
        {movie.vote_average}✨
      </p>
      <p>
        <b class="font-meduim text-gray-700">Released On:</b>
        {movie.release_date}
      </p>
      <p><b class="font-meduim text-gray-700">Produced By:</b></p>
      <ul>
        {#each movie.production_companies as company}
          <li class="indent-10">- {company.name}</li>
        {/each}
      </ul>
      <!-- </p> -->
      <p><b class="font-meduim text-gray-700">Languages:</b></p>
      <ul class="">
        {#each movie.spoken_languages as language}
          <li class="indent-10">- {language.english_name}</li>
        {/each}
      </ul>
      <!-- </p> -->
    </div>
  </section>
</article>
