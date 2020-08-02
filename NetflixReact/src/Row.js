import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/"



function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //useEffect [] sans condition: run code à l'intanciation, puis pas de reload
    useEffect(() => {
        async function fetchData() {
         //   console.log(axios)
           // console.log(fetchUrl)
            const requette = await axios.get("https://api.themoviedb.org/3" + fetchUrl);
            //  const request2 = await axioss.get(fetchUrl);
            //console.table(requette.data.results)
            //  console.log(request2.data.results)
            //  console.log(request2)
            setMovies(requette.data.results)
            return requette
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 1,
        },
      };

      const handleClick = (movie) => {
          if (trailerUrl) {
              setTrailerUrl('');
          } else {
              console.log(movie)
              console.log(movie.name)
              console.log("tututu " + (movie?.title || movie?.name || movie?.original_name)|| "")
              movieTrailer( (movie?.name || movie?.title || movie?.original_name) || "")
              .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams)
                setTrailerUrl(urlParams.get('v'));
            })
              .catch((error) => console.log(error+"  tototo"));
          }
      }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">

                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} 
                        />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    );
}

export default Row
