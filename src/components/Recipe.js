import React from "react";

const Recipe = ({ data }) => {

    return (
        <div className="col-md-4 my-4 recipeInList">
            <img className="img img-thumbnail" src={data.image} alt={data.label} />
            <h5 className="recipe-title">{ data.label }</h5>
        </div>
    )

}

export default Recipe;