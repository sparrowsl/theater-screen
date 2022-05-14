<script context="module">
  const APIKey = import.meta.env.VITE_APIKey;
  const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;

  export async function load({ fetch }) {
    const response = await fetch(popular);
    const data = await response.json();

    if (response.ok) {
      return {
        props: {
          popular: data.results,
        },
      };
    }
  }
</script>

<script>
  import Movies from "$lib/components/Movies.svelte";

  export let popular;
  // console.log(popular);
</script>

<Movies movies={popular} />
