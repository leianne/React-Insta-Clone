import React from 'react';
import './SearchBar.css'

import SearchBarInput from './SearchBarInput';
import SearchBarIcons from './SearchBarIcons';
import SearchBarLogo from './SearchBarLogo';


const SearchBarContainer = () => {
    return (
        <div className='searchBarContainer'>
            <SearchBarLogo />
            <SearchBarInput />
            <SearchBarIcons />

        </div>
    )
}

export default SearchBarContainer;