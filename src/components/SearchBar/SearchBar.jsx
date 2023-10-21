import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"

const SearchBar=()=>{

    return (
        <div className="search-bar">
            <input placeholder="Search an albumn of your choice" type="search" className="search-input"></input>
            <button className="search-button"><SearchIcon style={{ fontSize: 30      }} /></button>
        </div>
    )
}
export default SearchBar;