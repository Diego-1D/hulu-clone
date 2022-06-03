const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        titleHeader: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated: {
        titleHeader: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies: {
        titleHeader: "Action",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchKidsMovies: {
        titleHeader: "Kids",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=14`
    },
    fetchComedyMovies: {
        titleHeader: "Comedy",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies: {
        titleHeader: "Horror",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: {
        titleHeader: "Romance",
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
}