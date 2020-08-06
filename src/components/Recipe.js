import React from "react";

const Recipe = ({ data }) => {

    return (
        <div className="col-4 my-4">
            <h4 className="recipe-title">{ data.label }</h4>
            <img className="img img-thumbnail" src={data.image} alt={data.label} />
        </div>
    )

}

export default Recipe;