import React from "react";
import { Link } from 'react-router-dom';

const RecipeListItem = ({ data }) => {

    return (
        
        <div className="col-md-4 my-4 recipeInList">
            <Link to={{pathname: `/recipe/${data.label.toLowerCase().replace(/ /g, "-")}/?${data.uri}`, query: { data }}}>
                <img className="img img-thumbnail" src={data.image} alt={data.label} />
                <h5 className="recipe-title">{ data.label }</h5>
            </Link>
        </div>
        
    )

}

export default RecipeListItem;