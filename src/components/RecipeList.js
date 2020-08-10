import React from "react";
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes, searched, text }) => {

    return (
        <div>
            { searched ? 
                <h4 className="mt-5">Search results for: { text }</h4> 
            : "" }
            
            <div className="my-3 row">
                { searched && recipes.length > 0 ? 
                    recipes.map((item, i) => (
                        <RecipeListItem data={item.recipe} key={i} />
                    )) 
                : searched && recipes.length === 0 ? <h5>No results</h5> : ""}
            </div>
        </div>
    )

}

export default RecipeList;