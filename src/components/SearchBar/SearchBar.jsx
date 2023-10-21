import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"

const SearchBar=()=>{

    return (
        <div className="search-bar">
            <input placeholder="Search an albumn of your choice" className="search-input"></input>
            <button className="search-button"><SearchIcon />  </button>
        </div>
    )
}
export default SearchBar;