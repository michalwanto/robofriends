import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <label> </label>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
        aria-lebel="input reobot name"
      />
    </div>
  );
};

export default SearchBox;
