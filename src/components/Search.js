import React from "react";
import RecipeList from './RecipeList';
import Searchbar from "./Searchbar";

const Search = (props) => {

    console.log(props.location.state);

    const recipes = props.location.state.recipes;
    const searched = props.location.state.searched;
    const text = props.location.state.text;

    return (
        <div>
            <Searchbar query={text} />
            <RecipeList recipes={recipes} searched={searched} text={text} />
        </div>
    );
}

export default Search;