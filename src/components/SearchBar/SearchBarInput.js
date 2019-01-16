import React from 'react'

const SearchBarInput = (props) => {
    return (
        <label className='searchBarInputContainer'>
            <form onSubmit={props.addComment}>
            <input  name='searchText'  className='searchBarInput' type='text' placeholder='Search' value={props.searchText} onChange={props.searchData}/> 
            </form>
        </label>
    )
}

export default SearchBarInput;