import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import apiKeys from "../assets/keys.json";
import Loading from "./Loading";
import { withRouter} from 'react-router-dom';

const Searchbar = (props) => {

    const [recipes, setRecipes] = useState([]);
	const [text, setText] = useState("");
	const [query, setQuery] = useState("");
	const [searched, setSearched] = useState(false);
	const [isLoading, setLoading] = useState(false);

    const APP_ID = apiKeys.appId;
	const APP_KEY = apiKeys.appKey;
    const baseUrl = "https://api.edamam.com/search";
    
    useEffect(() => {
        if (props.query && props.query.length > 0) {
            setQuery(props.query);
        }
    }, []);

    const enterPress = e => {
        if (e.key === "Enter") search(query);
    }

    const updateValue = e => {
        setQuery(e.target.value);
    }

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
				props.history.push({
					pathname: "/search",
					search: `?q=${query}`,
					state: {
						recipes: data.hits, 
						searched: true, 
						text: query
					}
				});
			});
		})
	}

    return (
        <div className="my-5">
            <div className="form-inline">
                <input className="search-bar form-control mr-1 w-50" value={query} onChange={updateValue} type="search" placeholder="Search..." onKeyPress={enterPress} />
                <button className="search-btn btn btn-outline-info" type="button" onClick={() => search(query)}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <Loading isLoading={isLoading} />
        </div>
    )

}

export default withRouter(Searchbar);