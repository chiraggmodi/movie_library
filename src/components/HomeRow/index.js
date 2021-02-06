import axios from '../API/axios';
import React, { useEffect, useState } from 'react'
import "./row.css";


function HomeRow ({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    return (
        <div className="HomeRow">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies?.map((movie) => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                        <img key={movie.id} className={`row__poster ${isLargeRow && "row_posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    )
                ))}
            </div>

        </div>
    )
}

export default HomeRow
