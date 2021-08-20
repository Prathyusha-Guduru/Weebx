import React from "react";	
import { useState,useEffect } from "react";

const searchAnime = async(animeName) => {
	const response = await (await fetch(`https://api.jikan.moe/v3/search/anime?q=${animeName}$order_by=title&sort-asc&limit=15`));
  const data = await response.json();
  console.log(data.results);
  return response;
}

const Form = ({inputText,
	setInputText,
	status,
	setStatus,
	genreAnime,
	setGenreAnime}) => {

	const genreDict = {
		"default" : 11,
		"action" : 1,
			"romance" : 22,
			"ecchi" : 9,
			"fantasy" : 10
	}

	const getGenreAnime = (genre) => {
		const num = genreDict[genre]
		console.log('num',num);
			fetch(`https://api.jikan.moe/v3/genre/anime/${num}/1`)
			.then(
				response=>response.json()
			).then(
				(data)=>{
						console.log(data.anime)
						setGenreAnime(data.anime)
				}
			).catch(
				err => console.log(err)
			)
	}


	useEffect(()=>{
		getGenreAnime(status)
	},[status])

	const inputTextHandler = (e) => {
		setInputText(e.target.value)
	}

	const searchHandler  = (e) => {
		e.preventDefault();
		console.log(inputText);
		searchAnime(inputText);
	}

	const statusHandler = (e) => {
		if (e.target.value === "all"){
			setStatus('default')
		}else{
			setStatus(e.target.value)
		}
}

	return (
		<form action="">
			<input type="text" name="search" id="" onChange = {inputTextHandler}/>
			<button type="submit" onClick = {searchHandler}>Search</button>
			<div className="select">
		 <select name="genre" className="filter-genre" onChange = {statusHandler}>
						<option value="all">All</option>
						<option value="action">Action</option>
						<option value="romance">Romance</option>
						<option value="ecchi">ecchi</option>
						<option value="fantasy">Fantasy</option>
			</select>
		</div>
		</form>
	)	

}

export default Form;