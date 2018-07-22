import React, { Component } from 'react';

class Search extends Component {


    render() {
        return (
            <div className="search-container">
                <input name="search" type="text" value={this.props.searchTerm} onChange={(e) => this.props.onSearchChange(e)}/>
            </div>
        
        );
    }
}

  
export default Search;