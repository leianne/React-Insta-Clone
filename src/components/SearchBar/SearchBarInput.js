import React from 'react'

import { InputContainer, Input } from './SearchBarStyles';

const SearchBarInput = (props) => {
    return (
        <InputContainer className='searchBarInputContainer'>
            <form onSubmit={props.addComment}>
            <Input  name='searchText'  className='searchBarInput' type='text' placeholder='Search' value={props.searchText} onChange={props.searchData}/> 
            </form>
        </InputContainer>
    )
}

export default SearchBarInput;