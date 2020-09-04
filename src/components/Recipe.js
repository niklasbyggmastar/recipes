import React, { useState, useEffect } from "react";

const Recipe = (props) => {

    const [recipe, setRecipe] = useState({});
    const baseUrl = "http://127.0.0.1:8000";

    console.log(props);

    useEffect(() => {
        if (props.location.query && props.location.query.data) {
            setRecipe(props.location.query.data);
        } else if (props.location.query === undefined) {
            fetchRecipe().then((data) => {
                console.log(data);
                setRecipe(data);
            });            
        }
    }, []);

    // If no recipe data in props, fetch from api by name and get the first match
    /**
     * Not always getting the same recipe
     * --> search by id somehow? https://developer.edamam.com/edamam-docs-recipe-api     
     */
    const fetchRecipe = async() => {
        const data = await fetch(`${baseUrl}/recipe?r=${props.match.params.name}`);
        const response = await data.json()
        return response.hits[0].recipe;
    }

    return(
        <div className="recipe-view mt-10vh">
            {recipe !== undefined ? (
                <div>
                    <h1>{ recipe.label }</h1>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <ul>
                                {recipe.ingredientLines && recipe.ingredientLines.length > 0 ? 
                                    recipe.ingredientLines.map((row, i) => (
                                        <li key={i}>{ row }</li>
                                    ))
                                : ""}
                            </ul>
                        </div>
                        <div className="col">
                            <img src={recipe.image} alt={recipe.label} />
                        </div>
                    </div>
                </div>
            ) : ""}
        </div>
    )
}

export default Recipe;