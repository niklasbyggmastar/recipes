import React from "react";
import Recipe from './Recipe';

const RecipeList = ({ recipes, searched, text }) => {

    return (
        <div>
            { searched ? 
                <h4 className="mt-5">Search results for: { text }</h4> 
            : "" }
            
            <div className="my-3 row">
                { searched && recipes.length > 0 ? 
                    recipes.map((item, i) => (
                        <Recipe data={item.recipe} key={i} />
                    )) 
                : searched && recipes.length === 0 ? <h5>No results</h5> : ""}
            </div>
        </div>
    )

}

export default RecipeList;