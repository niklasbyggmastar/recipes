import React, { useState, useEffect } from 'react';
import './App.scss';
import Searchbar from './components/Searchbar';
import apiKeys from "./assets/keys.json";
import Recipe from './components/Recipe';
import Loading from './components/Loading';

const App = () => {

	const APP_ID = apiKeys.appId;
	const APP_KEY = apiKeys.appKey;
	const baseUrl = "https://api.edamam.com/search";

	const [recipes, setRecipes] = useState([]);
	const [query, setQuery] = useState("");
	const [searched, setSearched] = useState(false);
	const [isLoading, setLoading] = useState(false);
	
	useEffect(() => {
		console.log("EFFECT RUNS");
	}, []);

	const search = async(query) => {
		setLoading(true);
		const response = await fetch(`${baseUrl}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		console.log(data.hits);
		setRecipes(data.hits);
		setLoading(false);
		setSearched(true);
	}

	return (
		<div className={`main ${searched === true ? "mt-10vh" : ""}`}>
			<Searchbar search={search} query={query} setQuery={setQuery} />
			<Loading isLoading={isLoading} />
			<div className="my-5 row">
				{ searched && recipes.length > 0 ? 
					recipes.map((item, i) => (
						<Recipe data={item.recipe} key={i} />
					)) 
				: searched && recipes.length === 0 ? "No results" : ""}
			</div>
		</div>
	);

}

export default App;
