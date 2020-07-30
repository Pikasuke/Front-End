import React from 'react';
import Row from './Row';
import request from './request';
import "./App.css"
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
      <h1>Je suis le App NetFlix</h1>
      <Nav/>
      <Banner/>
      <Row title="Netflix original" fetchUrl={request.fetchNetflixOriginal} isLargeRow/> 
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/> 
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/> 
      <Row title="Action Movies" fetchUrl={request.fetchActionMovie}/> 
      <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovie}/> 
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovie}/> 
      <Row title="Documentaries Movies" fetchUrl={request.fetchDocumentariesMovie}/> 
    </div>
  );
}

export default App;
