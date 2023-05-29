const API_KEY = '3d9b154117ba874dc2e52ba37ff08e6f';

export function fetchMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fatchMovieByQuery(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchMovieDetails(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,reviews&language=en-US`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCast(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchReview(movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
