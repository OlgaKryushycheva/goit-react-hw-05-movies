// const API_KEY = '3d9b154117ba874dc2e52ba37ff08e6f';
// const KEY =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDliMTU0MTE3YmE4NzRkYzJlNTJiYTM3ZmYwOGU2ZiIsInN1YiI6IjY0NmQzMDk2ZDE4NTcyMDE2MTkzN2VkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n-9jgVQVISJu7HiYIm-YIAtRu6yvYAr7orOjjGCjrJQ';

//   curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/11?api_key=3d9b154117ba874dc2e52ba37ff08e6f

// curl --request GET \
//      --url 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDliMTU0MTE3YmE4NzRkYzJlNTJiYTM3ZmYwOGU2ZiIsInN1YiI6IjY0NmQzMDk2ZDE4NTcyMDE2MTkzN2VkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n-9jgVQVISJu7HiYIm-YIAtRu6yvYAr7orOjjGCjrJQ' \
//      --header 'accept: application/json'

// function fetchMovies() {
//   return fetch(
//   'https://api.themoviedb.org/3/movie/?api_key=3d9b154117ba874dc2e52ba37ff08e6f'
//   trending
// 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

// 'https://api.themoviedb.org/3/search/betman?api_key=3d9b154117ba874dc2e52ba37ff08e6f&include_adult=false&language=en-US&page=1'
// 'https://api.themoviedb.org/3/movie/603692/reviews'
// https://api.themoviedb.org/3/search/keyword?page=1
//   )
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }

// function fetchMovies() {
//   return fetch(
//     `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// export default fetchMovies;

// options (cast)
// https://developer.themoviedb.org/reference/discover-movie

// https://api.themoviedb.org/3/movie/{movie_id}/reviews

// ==========================================
// ===================================
// trend
// 'https://api.themoviedb.org/3/trending/movie/day?api_key=3d9b154117ba874dc2e52ba37ff08e6f&language=en-US'

// reviews
// `https://api.themoviedb.org/3/movie/603692/reviews?api_key=${API_KEY}`
// 'https://api.themoviedb.org/3/movie/movie_id/reviews?&language=en-US&page=1'

// ключевое слово
// `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=batman&include_adult=false&language=en-US&page=1`

// ID
// `https://api.themoviedb.org/3/movie/603692?api_key=${API_KEY}&language=en-US`

//   ?????????????????????
//   `https://api.themoviedb.org/3/movie/603692?api_key=${API_KEY}&append_to_response=cast&language=en-US`

// ===============
// `https://api.themoviedb.org/3/movie/603692/reviews?api_key=${API_KEY}` // reviews // 'https://api.themoviedb.org/3/trending/movie/day?api_key=3d9b154117ba874dc2e52ba37ff08e6f&language=en-US' // 'https://api.themoviedb.org/3/trending/movie/day?api_key=3d9b154117ba874dc2e52ba37ff08e6f&language=en-US' // trend // ===================================
// 'https://api.themoviedb.org/3/movie/movie_id/reviews?&language=en-US&page=1'

// ключевое слово
// `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=batman&include_adult=false&language=en-US&page=1`

// ID
// `https://api.themoviedb.org/3/movie/603692?api_key=${API_KEY}&language=en-US`

// append_to_response?????????????
// `https://api.themoviedb.org/3/movie/603692?api_key=${API_KEY}&append_to_response=cast&language=en-US`
// `https://api.themoviedb.org/3/movie/603692?api_key=${API_KEY}&append_to_response=cast&language=en-US`
// `https://api.themoviedb.org/3/movie/157336?api_key=3d9b154117ba874dc2e52ba37ff08e6f&append_to_response=videos`

// `https://api.themoviedb.org/3/movie/603692/aggregate_credits?api_key=${API_KEY}&language=en-US&page=1`

// cast TV
// `https://api.themoviedb.org/3/tv/202250/aggregate_credits?api_key=${API_KEY}&language=en-US`

//  =============!!!!!!!!!!!!!!!!!!!!!!!!=======================
// trend
// `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`

// word
// `https://api.themoviedb.org/3/search/movie?query=batman&api_key=${API_KEY}&include_adult=false&language=en-US&page=1`

// movie details
// `https://api.themoviedb.org/3/movie/603692?api_key=${API_KEY}&language=en-US`

// reviews
// `https://api.themoviedb.org/3/movie/603692/reviews?api_key=${API_KEY}&language=en-US&page=1`

// cast
// `https://api.themoviedb.org/3/movie/603692/credits?api_key=${API_KEY}&language=en-US`

// ===========================================
