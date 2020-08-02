const API_KEY = "96e96de0188f08f2b918dfa5044e897e";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=fr-FR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentariesMovie: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default request ;