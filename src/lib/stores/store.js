import { readable, writable } from "svelte/store";

export const categories = readable(["Popular", "Top Rated", "Upcoming"]);

export let category = writable("popular");
