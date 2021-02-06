import React from 'react'
import request from '../API/RequestsApi';
import Banner from '../Banner';
import HomeRow from '../HomeRow';
import NavBar from '../NavBar';
import "./Homescreen.css";

function HomeScreen () {
    return (
        <div className="HomeScreen">
            <NavBar />
            <Banner />
            <HomeRow title="Originals" fetchURL={request.fetchOriginals} isLargeRow />
            <HomeRow title="Trending Now" fetchURL={request.fetchTrending} />
            <HomeRow title="Top Rated" fetchURL={request.fetchTopRated} />
            <HomeRow title="Action Movie" fetchURL={request.fetchActionMovie} />
            <HomeRow title="Comedy Movie" fetchURL={request.fetchComedyMovies} />
            <HomeRow title="Horror Movie" fetchURL={request.fetchHorrorMovies} />
            <HomeRow title="Romance Movie" fetchURL={request.fetchRomanceMovies} />
            <HomeRow title="Documentaries Movie" fetchURL={request.fetchDocumentariesMovies} />
        </div>
    )
}

export default HomeScreen
