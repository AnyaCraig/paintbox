import React, { Component } from 'react';

import './Search.scss';

class Search extends Component {


    render() {
        return (
            <div className="search-container">
                <input name="search" type="text" placeholder={this.props.placeholder} value={this.props.searchTerm} onChange={(e) => this.props.onSearchChange(e)}/>
            </div>
        
        );
    }
}

  
export default Search;