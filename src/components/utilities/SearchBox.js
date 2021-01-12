import React from "react";
import "./SearchBox.css";

const SearchBox = ({ handleSearchChange }) => {
  return (
    <div className="search-box">
      <input
        className="search-text"
        placeholder="Search By Username....."
        onChange={handleSearchChange}
      />{" "}
    </div>
  );
};

export default SearchBox;
