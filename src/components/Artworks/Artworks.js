// components/Artworks/Artworks.js
import React, { Component } from 'react';
import axios from 'axios';

class Artworks extends Component {
  state = {
    artworks: [],
    artists: [],
  }

  getArtworks = async () => {
    const res = await axios.get('/artworks');
    return res.data;
  }

  getArtists = async () => {
    const res = await axios.get('/artists');
    return res.data;
  }

  assignArtist = (thisArtwork) => {
    return this.state.artists.find((artist) => (artist.artworks.find(artwork => artwork._id === thisArtwork._id)) !== undefined);
  }
  // get all artists in the main parent state
  // pass them down to a compoentn that needs a list of artworks

  // get a list of all artists
  // make sure that the artists hace the artworks property poluated
  // iterate through each artist and display their artworks
  // push artworks into an artworks array (also push in the artists objects

  // randomize the array if you want it to be random


  populateArtists = () => {
    const artworks = Array.from(this.state.artworks);

    artworks.forEach(artwork => {
        artwork.artist = this.assignArtist(artwork);
    });

    this.setState({artworks});
  }

  async componentDidMount () {
    const artworks = await this.getArtworks();
    const artists = await this.getArtists();
    this.setState({ artworks, artists });
    this.populateArtists();
  }

  render () {
    return (
      <div>
        <h2>Artworks</h2>
        <ul>
          {this.state.artworks.map(artwork => <li>{artwork.name}, {artwork.year}, {artwork.artist ? artwork.artist.firstName : ""} {artwork.artist ? artwork.artist.lastName : ""}</li>)}
        </ul>
      </div>
    )
  }
}

export default Artworks;