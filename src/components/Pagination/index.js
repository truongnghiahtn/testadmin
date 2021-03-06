import React from "react";
import "./style.scss";
const Pagination = ({ itemPerPage, totalItem, paginate, numberPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumber.push(i);
  }

  return pageNumber.map(number => (
    <li
      className={number === numberPage ? "page-item active" : "page-item"}
      key={number}
    >
      <a
        onClick={() => {
          paginate(number);
        }}
        className="page-link"
      >
        {number}
      </a>
    </li>
  ));
};

export default Pagination;
