import React from "react"
import "../src/assets/scss/main.scss"

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

const searchAnime = async(animeName) => {
	const response = await (await fetch(`https://api.jikan.moe/v3/search/anime?q=${animeName}$order_by=title&sort-asc&limit=15`));
  const data = await response.json();
  console.log(data.results);
  return response;
}

function App() {
  
  return (
    <div className="App">
      
      <h1>Hello, world!</h1>
    </div>
  );
}

export default App;
