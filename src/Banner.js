import React, { useState ,useEffect} from 'react';
import requests from './request';
import axios from './axios';
import './Banner.css';
function Banner() {
const [movie,setMovies] = useState([]);
useEffect(() => {

    async function fetchData(){
        const request = await axios.get(requests.fetchSciFi);
        // console.log(">---",request,"<---");
        setMovies(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
            );
            return requests;
    }
    fetchData();
}, []);

// console.log(movie);

function truncate(str,n){
    return str?.length > n ? str.substr(0, n-1)+ "..." : str;
}
    return (
        <header
         className="banner"
        style={{backgroundSize:"cover",
        backgroundImage:`url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center",
        }} >
            <div className="banner_content">   
    <h1 className="banner_title"> {movie?.title || movie?.name|| movie?.original_name} </h1>

    < div className="banner_buttons">
       <button className="banner_button">Play</button>
      <button className="banner_button">MyList</button>
         </div>
         
         <h1 className="banner_description">{truncate(movie?.overview ,150)} </h1>   
        
        </div>
        <div className="banner_fadebottom "></div>
        </header>
    );
}

export default Banner;
