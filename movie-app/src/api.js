const API_KEY=import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL="https://api.themoviedb.org/3";

export const IMG_URL="https://image.tmdb.org/t/p/w500";

export const getPopularMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.json();

};
/** 
@param {string} query
@returns {Promise<Object>}
*/
export const searchMovies = async (query) =>{

    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.json();
};



