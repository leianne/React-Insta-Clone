import React from 'react';

import SearchBarInput from './SearchBarInput';
import SearchBarIcons from './SearchBarIcons';
import SearchBarLogo from './SearchBarLogo';

import { Container } from './SearchBarStyles'

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
            <Container>
                <SearchBarLogo />
                <SearchBarInput handleChange={this.handleChange} searchData={this.props.searchData}/>
                <SearchBarIcons />
            </Container>
        )
    }
}

export default SearchBarContainer;