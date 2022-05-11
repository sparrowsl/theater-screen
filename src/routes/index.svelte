<script context="module">
  const APIKey = "46c773b6fa9990476c24cfba87dfce3d";
  // const trending = `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKey}`
  const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;

  export async function load({ fetch }) {
    const response = await fetch(popular);
    const data = await response.json();

    if (response.ok) {
      return {
        props: {
          popular: data,
        },
      };
    }
  }
</script>

<script>
  import Movies from "$lib/components/Movies.svelte";

  export let popular;
  console.log(popular.results);
</script>

<Movies movies={popular.results} />
