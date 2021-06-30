import React from 'react';
import SearchInput from "./SearchInput";

const Header = () => {
    return (
        <header>
            <div className="container d-flex justify-content-between">
                <div className="title">
                    <h1>My News</h1>
                </div>

                <SearchInput />
            </div>
        </header>
    );
}

export default Header;
