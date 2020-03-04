import React from "react";

import "./searchbar.scss";
import searchIcon from "../../assets/Icons/SVG/Icon-search.svg";

const SearchBar = () => {
  return (
    <div className="search">
      <img
        className="search__icon"
        src={searchIcon}
        alt="search icon"
      />
      <input className="search__input" placeholder="Search" />
    </div>
  )
}

export default SearchBar;

