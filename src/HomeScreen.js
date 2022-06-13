import React from "react";
import Banner from "./banner";
import "./HomeScreen.css"
import Nav from "./Nav";
import userrequest from "./request";
import Row from "./Row"

function HomeScreen()
{
    return(
        <div className="homescreen">
           <Nav/>
            <Banner/>

        <Row title="Netflix Originals" isLargeRow fetchUrl={userrequest.fetchNetflixOriginals}/>

        <Row title="Trending Now"fetchUrl={userrequest.fetchTrending }/>

        <Row title="Action Movies"fetchUrl={userrequest.fetchActionMovies }/>

        <Row title="Comedy Movies" fetchUrl={userrequest.fetchComedyMovies }/>

        <Row title="Documentaries"  fetchUrl={userrequest.fetchDocumentaries }/>

        <Row title="Horror Movies"  fetchUrl={userrequest.fetchHorrorMovies }/>

        <Row title="Romance Movies" fetchUrl={userrequest.fetchRomanceMovies }/>

        <Row title="Top Rated" fetchUrl={userrequest.fetchTopRated }/>

        
        </div>
    );
}

export default HomeScreen;