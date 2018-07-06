// components/Artists/Artists.js

import React, { Component } from 'react';
import axios from 'axios';

class Artists extends Component {
  state = {
    artists: []
  }

  getArtists = async () => {
    const res = await axios.get('/artists');
    return res.data;
  }

  async componentDidMount () {
    const artists = await this.getArtists()
    this.setState({ artists })
  }

  render () {
    return (
      <div>
        <h2>Artists</h2>
        <ul>
          {this.state.artists.map(artist => <li>{artist.firstName} {artist.lastName}</li>)}
        </ul>
      </div>
    )
  }
}

export default Artists;