import React from "react";


const AnimeCard = ({anime}) => {
	return (
	// <div className = "anime-card-wrapper">
		<a href={anime.url} className = "anime-card ">
	<h2 className = 'anime-title'>{anime.title}</h2>	
	<img src= {anime.image_url} alt="" className = 'anime-img'/>
	<p>Episode count : {anime.episodes}</p>
	<p>Rating : {anime.score}/10</p>
	</a>
// </div>

	)
}

export default AnimeCard;