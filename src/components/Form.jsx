import React from "react";	
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Form = ({inputText,
	setInputText,
	status,
	setStatus,
	genreAnime,
	setGenreAnime}) => {

	const genreDict = {
		"default" : -1,
		"action" : 1,
			"romance" : 22,
			"ecchi" : 9,
			"fantasy" : 10
	}

	const getGenreAnime = (genre) => {
		const num = genreDict[genre]
		if(num !== -1){
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
		else {
			if (window.localStorage.getItem("searchAnimeName"))
			{
				searchAnime(window.localStorage.getItem("searchAnimeName"))
			}
			else{
				fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
			.then(
				response=>response.json()
			).then(
				(data)=>{
						console.log(data.top)
						setGenreAnime(data.top)
				}
			).catch(
				err => console.log(err)
			)
		}
			}
	}

	const searchAnime = async(animeName) => {
		
		const response = await (await fetch(`https://api.jikan.moe/v3/search/anime?q=${animeName}$order_by=title&sort-asc&limit=15`));
  const data = await response.json();
  console.log(data.results);
		setGenreAnime(data.results)
  return response;
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
		window.localStorage.setItem("searchAnimeName",inputText)
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
		<div className="header-wrapper">
					<header><h1 className="logo">WeebX</h1></header>
		<form action="" className = 'form'>
			<div className="search-container">
			<input type="text" name="search" id="" onChange = {inputTextHandler}/>
			<button type="submit" onClick = {searchHandler} className = 'search-btn'>	
				{/* <i class="fa-solid fa-magnifying-glass"></i> */}
				{/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className = 'icon' /> */}
				Search
			</button>
			</div>
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
		</div>

	)	

}

export default Form;