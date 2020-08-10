import React from "react";

const Recipe = (props) => {

    console.log(props);
    const data = props.location.query ? props.location.query.data : {};

    return(
        <div className="recipe-view mt-10vh">
            <h1>{ data.label }</h1>
            <hr />
            <div className="row">
                <div className="col">
                    <ul>
                        {data.ingredientLines && data.ingredientLines.length > 0 ? 
                            data.ingredientLines.map((row, i) => (
                                <li key={i}>{ row }</li>
                            ))
                        : ""}
                    </ul>
                </div>
                <div className="col">
                    <img src={data.image} alt={data.label} />
                </div>
            </div>
        </div>
    )
}

export default Recipe;