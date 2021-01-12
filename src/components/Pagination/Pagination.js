import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, handlePagination }) => {
  // create an array for page numbers
  const pages = [...Array(totalPages).keys()].map((number) => number + 1);
  //console.log(pages, "pages", totalPages, "totalPages");

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination  justify-content-center">
        {pages.map((number) => {
          return (
            <li className="page-item" key={number}>
              <a className="page-link" onClick={() => handlePagination(number)}>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;

{
  /* <a href="https://www.bitdegree.org/">&laquo;</a>
      <a href="https://www.bitdegree.org/">1</a>
      <a href="https://www.bitdegree.org/">2</a>
      <a href="https://www.bitdegree.org/">3</a>
      <a href="https://www.bitdegree.org/">4</a>
      <a href="https://www.bitdegree.org/">5</a>
      <a href="https://www.bitdegree.org/">&raquo;</a> */
}
