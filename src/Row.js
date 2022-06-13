import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";


function Row({title,isLargeRow,fetchUrl}){
    const [movie,setMovie] = useState([]);

     const [trailerUrl,setTrailerUrl]  = useState("");

    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);

            setMovie(request.data.results);
            return request
        }
           fetchData();
    },[])


    const handleClick=(movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie.name || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error));
        }
    }

    const opts ={
        height :"390",
        width : "100%",
        playerVars : {
            autoplay : 1,
        },
    };

    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {
                    movie.map(movie=>{
                        return  <img  onClick={()=>handleClick(movie)} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} className={`row__poster ${isLargeRow && "LargeImage"}`} key = {movie.id}/>
                    })
                }
            </div>
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;