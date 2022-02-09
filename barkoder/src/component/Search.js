import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

function Search() {
  return (
        <div className='search'>
            <div className='icon'><BiSearchAlt/></div>
            <input type="text" placeholder='Search Brands' />
        </div>
  );
}
export default Search;