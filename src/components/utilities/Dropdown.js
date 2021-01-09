import React from "react";
import "./Dropdown.css";

const Dropdown = ({ filteredBy, options }) => {
  return (
    <div className="container dropdown-container">
      <div>
        <h6>
          <span style={{ fontWeight: "300" }}>Filter By : </span>
          {filteredBy}
        </h6>
      </div>
      <select className="select-group">
        {options.map((option, i) => {
          return <option key={i}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
