import React from "react";


const AnimeCard = ({anime}) => {
	return (
	<div className = "anime-card-wrapper">
		<a href={anime.url} className = "anime-card">
	<h1>{anime.title}</h1>	
	<img src= {anime.image_url} alt="" />
	<p>{anime.episodes}</p>
	<p>{anime.score}/10</p>
	</a>
</div>

	)
}

export default AnimeCard;