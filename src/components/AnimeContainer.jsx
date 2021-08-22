import React from "react";
import "../assets/scss/main.scss"
import AnimeCard from "./AnimeCard";

const AnimeContainer = ({genreAnime}) => {
	return (
		<div className = "all-anime-container">
			{genreAnime.map((anime)=>{
				return (
						<AnimeCard anime = {anime}/>
					
				)
				
			})}
		</div>
	)
}

export default AnimeContainer;