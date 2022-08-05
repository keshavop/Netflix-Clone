
import React,{useEffect, useState} from 'react';
import axios from './axios';
import './Rows.css';
import Youtube from 'react-youtube';
const base_Url = "https://image.tmdb.org/t/p/original";
// const url = `https://api.themoviedb.org/3/search/movie?api_key=60cd940dda2f953168a044483b9e7fb9&language=en-US&query=${query}&page=1&include_adult=false`;
        
function Row({obj, title, fetchUrl,isLargeRow }) {
    const [ movie,setMovies ] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
useEffect(() => {
async  function fetchData (){
    const request = await axios.get(fetchUrl);
    // console.log(request);
    setMovies(request.data.results);
    setMovies(request.data.results);
   
    return request;
}
fetchData();

}, [fetchUrl]);
const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
      );
      obj ?  setTrailerUrl(trailerurl.data.results[0]?.key) : setTrailerUrl("")
    }
  };
// console.log(movie);
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movie.map(movie =>(
                <img 
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_Url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                onClick={() => handleClick(movie)}
                alt={movie.name} 
                />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
