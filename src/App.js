import React from "react"
import "../src/assets/scss/main.scss"

const topAnimeURL = "https://api.jikan.moe/v3/top/anime/1/bypopularity"
const getTopAnime = async() => {
	const response = await (await fetch(topAnimeURL));
  const data = await response.json();
  const topAnime = data.top.slice(0, 10);
  return topAnime;
}


getTopAnime()
  .then(topAnime => {
    console.log(topAnime);
  })
  .catch(error => {
    console.log(error);
  });



function App() {
  
  return (
    <div className="App">
      
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
