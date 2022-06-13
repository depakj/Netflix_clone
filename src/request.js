// const API_KEY = "b5347c780b99c35d84e6b3a5d8719791";
const API_KEY = "a31dd2067b9ff991d62b05b9982afcea";
const userrequest = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&languages=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export default userrequest;