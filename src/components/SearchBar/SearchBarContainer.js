import React from 'react';
import './SearchBar.css'

import SearchBarInput from './SearchBarInput'
import SearchBarIcons from './SearchBarIcons';

const SearchBarContainer = () => {
    return (
        <div className='searchBarContainer'>
            <SearchBarInput />
            <SearchBarIcons />

        </div>
    )
}

export default SearchBarContainer;