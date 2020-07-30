import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/"



function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])

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


    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">

                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name} 
                        />
                ))}
            </div>
            {/* container -> poster */}
        </div>
    );
}

export default Row
