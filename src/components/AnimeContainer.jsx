import React from "react";
import "../assets/scss/main.scss"

const AnimeContainer = ({genreAnime}) => {
	return (
		<div>
			{genreAnime.map((anime)=>{
				return (
					<a href={anime.url} className = "anime-card">
							<div>
							<h1>{anime.title}</h1>	
							<img src= {anime.image_url} alt="" />
							<p>{anime.episodes}</p>
							<p>{anime.score}/10</p>
						</div>
					</a>
					
				)
				
			})}
		</div>
	)
}

export default AnimeContainer;