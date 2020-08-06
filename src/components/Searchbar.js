import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ search, query, setQuery }) => {

    const enterPress = e => {
        if (e.key === "Enter") search(query);
    }

    const updateValue = e => {
        setQuery(e.target.value);
    }

    return (
        <div className="form-inline">
            <input className="search-bar form-control mr-1 w-50" value={query} onChange={updateValue} type="search" placeholder="Search..." onKeyPress={enterPress} />
            <button className="search-btn btn btn-outline-info" type="button" onClick={() => search(query)}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )

}

export default Searchbar;