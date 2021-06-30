import React from 'react';

const SearchInput = () => {
    return (
        <div className="input-group input-group-sm h-100 w-50 align-self-center">
            <input type="text" className="form-control form-control-sm" placeholder="Type something to search..." aria-label="search_button" aria-describedby="search_button" />
            
            <div className="input-group-append">
                <button className="btn btn-outline-success" type="button" id="search_button">Find</button>
            </div>
        </div>
    );
}

export default SearchInput;

