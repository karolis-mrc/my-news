import React from 'react';
import SearchInput from './SearchInput';

const Header = getQuery => {
  return (
    <header>
      <div className='container d-flex justify-content-between'>
        <div className='title'>
          <h1>My News</h1>
        </div>

        <div className=' h-100 w-50 align-self-center'>
          <SearchInput getQuery={getQuery}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
