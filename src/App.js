import React from "react"
import "../src/assets/scss/main.scss"
import Form from "./components/Form"
import { useState,useEffect } from "react"
import AnimeContainer from "./components/AnimeContainer"
import AnimeCard from "./components/AnimeCard"
import Footer from "./components/Footer";

const topAnimeURL = "https://api.jikan.moe/v3/top/anime/1/bypopularity"


const getTopAnime = async() => {
	const response = await (await fetch(topAnimeURL));
  const data = await response.json();
  const topAnime = data.top.slice(0, 10);
  return topAnime;
}

const settings = {
  method: 'POST',
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
  }
};


function App() {

  const [inputText,setInputText] = useState("");
	const [status,setStatus] = useState("default");
	const [genreAnime, setGenreAnime] = useState([])
  const [amimeList,setAnimeList] = useState([])
  
  return (
    <div className="App">
      <Form inputText = {inputText} 
        setInputText = {setInputText} 
        status = {status} 
        setStatus = {setStatus}
        genreAnime = {genreAnime}
        setGenreAnime = {setGenreAnime} />
      
      <div className="anime-container">
        { genreAnime !== undefined ? genreAnime.map(anime=> <AnimeCard anime = { anime }/> ): "Sorry Something went wrong"}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
