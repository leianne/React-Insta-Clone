import React from 'react';
import './SearchBar.css'

import SearchBarInput from './SearchBarInput';
import SearchBarIcons from './SearchBarIcons';
import SearchBarLogo from './SearchBarLogo';


class SearchBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            data: this.props.data
        }

    }

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value})
        console.log(this.state.data)
    }
    
    render() {
        return (
            <div className='searchBarContainer'>
                <SearchBarLogo />
                <SearchBarInput handleChange={this.handleChange} searchData={this.props.searchData}/>
                <SearchBarIcons />
    
            </div>
        )
    }
}

export default SearchBarContainer;