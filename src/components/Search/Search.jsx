// Search.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ placeholder, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
   <div className="searchBlockContent">
     <div className="searchFillter">
      <input
        className="search"
        type="text"
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className="btnImgBlock" onClick={handleSearchClick}>
        <img className="btnImg" src="https://myprepod.ru/icons/search_new.png" alt="SearchBtn" />
      </button>
    </div>
   </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Search;
