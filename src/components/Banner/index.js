import React, { useEffect, useState } from 'react'
import axios from "../API/axios";
import Request from "../API/RequestsApi";
import "./Banner.css";

function Banner () {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData () {
            const request = await axios.get(Request.fetchOriginals);
            setmovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
        }
        fetchData();
    }, [])

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <header className="banner" style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPosition: "top center"
        }}>
            <div className="banner__contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>

                <h3 className="banner_description">{truncate(`${movie?.overview}`, 200)}</h3>
            </div>

            <div className="banner__fadeBottom"></div>
        </header>
    )
}

export default Banner
