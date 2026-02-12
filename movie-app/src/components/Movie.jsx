import {IMG_URL} from "../api.js"

function Movie({movie}) {

    return(
    
    
    <div className="movie">
        
        <img src={movie.poster_path ? IMG_URL + movie.poster_path:"https://via.placeholder.com/300x450"}
        alt ={movie.title}
        />

        <div className="movie-definition">
            <h3>{movie.title}</h3>
            <span>⭐{movie.vote_average}</span>
        </div>


    </div>    
        );
    
}

export default Movie;