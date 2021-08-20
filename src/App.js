import React from "react"
import "../src/assets/scss/main.scss"
import Form from "./components/Form"

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
  
  return (
    <div className="App">
      <Form />
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
