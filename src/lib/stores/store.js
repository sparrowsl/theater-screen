import { writable } from "svelte/store";

export const categories = ["Popular", "Latest", "Top Rated", "Upcoming"];

export let selectedCategory = "popular";
