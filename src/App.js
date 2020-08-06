import React, { useState, useEffect } from 'react';
import './App.scss';
import Searchbar from './components/Searchbar';
import apiKeys from "./assets/keys.json";
import Loading from './components/Loading';
import RecipeList from './components/RecipeList';

const App = () => {

	const APP_ID = apiKeys.appId;
	const APP_KEY = apiKeys.appKey;
	const baseUrl = "https://api.edamam.com/search";

	const [recipes, setRecipes] = useState([]);
	const [text, setText] = useState("");
	const [query, setQuery] = useState("");
	const [searched, setSearched] = useState(false);
	const [isLoading, setLoading] = useState(false);
	
	useEffect(() => {
		console.log("EFFECT RUNS");
	}, []);

	const search = (query) => {
		document.activeElement.blur();
		setLoading(true);
		fetch(`${baseUrl}?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(result => {
			result.json().then(data => {
				console.log(data.hits);
				setRecipes(data.hits);
				setText(query);
				setLoading(false);
				setSearched(true);
			});
		})
	}

	return (
		<div className={`main ${searched === true ? "mt-10vh" : ""}`}>
			<Searchbar search={search} query={query} setQuery={setQuery} />
			<Loading isLoading={isLoading} />
			<RecipeList recipes={recipes} searched={searched} text={text} />
		</div>
	);

}

export default App;
