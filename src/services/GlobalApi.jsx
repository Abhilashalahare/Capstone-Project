import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "d6660860ae2cea88e1f7b3daa3f7cfc8";

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(
    movieBaseUrl + "/discover/movie?api_key=" + api_key + "&with_genres=" + id
  );

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
