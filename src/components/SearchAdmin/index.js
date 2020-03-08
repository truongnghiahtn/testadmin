import React from "react";

const SearchAdmin = props => {
  return (
    <form action="#" className="searchbox">
      <input
        type="text"
        className="text search-input"
        placeholder="Type here to search..."
        onChange={event => props.onFilter(event.target.value)}
      />
      <a className="search-link" href="#">
        <i className="ri-search-line" />
      </a>
    </form>
  );
};

export default SearchAdmin;
