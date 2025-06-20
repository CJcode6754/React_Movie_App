const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchMoviesByQuery = async (query) => {
  try {
    const url = `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}`;
    const res = await fetch(url, API_OPTIONS);
    if (!res.ok) throw new Error("Failed to fetch search results");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies by query:", error);
    return [];
  }
};

export const fetchPopularMovies = async () => {
  try {
    const url = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const res = await fetch(url, API_OPTIONS);
    if (!res.ok) throw new Error("Failed to fetch popular movies");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const fetchTvSeriesByQuery = async (query) => {
  try {
    const url = `${API_BASE_URL}/search/tv?query=${encodeURIComponent(query)}`;
    const res = await fetch(url, API_OPTIONS);
    if (!res.ok) throw new Error("Failed to fetch search results");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching tv series by query:", error);
    return [];
  }
};

export const fetchPopularTvSeries = async () => {
  try {
    const url = `${API_BASE_URL}/discover/tv?sort_by=popularity.desc`;
    const res = await fetch(url, API_OPTIONS);
    if (!res.ok) throw new Error("Failed to fetch TV series");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching TV series:", error);
    return [];
  }
};

export const fetchAnimatedByQuery = async (query) => {
  try {
    const url = `${API_BASE_URL}/search/movie?query=${encodeURIComponent(
      query
    )}&language=en-US`;
    const res = await fetch(url, API_OPTIONS);
    if (!res.ok) throw new Error("Failed to fetch animated search results");
    const data = await res.json();

    // Filter only animation genre (id: 16)
    const animatedResults = data.results.filter((movie) =>
      movie.genre_ids.includes(16)
    );

    return animatedResults;
  } catch (error) {
    console.error("Error fetching animated movies by query:", error);
    return [];
  }
};

export const fetchPopularAnimated = async () => {
  try {
    const url = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&with_genres=16&with_keywords=210024`;
    const res = await fetch(url, API_OPTIONS);
    if (!res.ok) throw new Error("Failed to fetch TV series");
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching TV series:", error);
    return [];
  }
};
