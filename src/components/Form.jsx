import React from "react";	
import { useState,useEffect } from "react";

const searchAnime = async(animeName) => {
	const response = await (await fetch(`https://api.jikan.moe/v3/search/anime?q=${animeName}$order_by=title&sort-asc&limit=15`));
  const data = await response.json();
  console.log(data.results);
  return response;
}

const Form = () => {
	const [inputText,setInputText] = useState("");
	const inputTextHandler = (e) => {
		setInputText(e.target.value)
	}
	const searchHandler  = (e) => {
		e.preventDefault();
		console.log(inputText);
		searchAnime(inputText);
	}
	return (
		<form action="">
			<input type="text" name="search" id="" onChange = {inputTextHandler}/>
			<button type="submit" onClick = {searchHandler}>Search</button>
		</form>
	)	
		
	
}

export default Form;