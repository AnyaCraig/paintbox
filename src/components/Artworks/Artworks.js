// components/Artworks/Artworks.js
import React, { Component } from 'react';
// import axios from 'axios';
import { formatYear } from '../../helpers';
import { Link } from 'react-router-dom';

import './Artworks.scss';

class Artworks extends Component {
  state = {
    currentArtworks: [],

  }

  componentDidMount () {
    this.populateArtworks();
  }

  componentWillReceiveProps() {
    this.populateArtworks();
  }
  
  populateArtworks() {
    console.log("This props artworks", this.props.artworks);
    const shuffledArtworks = this.randomizeArtworks(this.props.artworks);
  
    console.log("shuffled", shuffledArtworks);
    this.setState({ currentArtworks: shuffledArtworks });

  }
  
  randomizeArtworks(artworks) {

    const array = Array.from(artworks);

    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
    
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render () {

    return (
      <div className="artworks-root">
        <h2>Artworks</h2>
        <div className="gallery-container">
          {this.state.currentArtworks.map(artwork => {

            return (
              
                <div className="artwork-box">
                  <Link to={`/artworks/${artwork._id}`}>
                    <div className="artwork-image">
                      <img src={artwork.image} alt={artwork.description}/>
                    </div>
                  </Link>
                  <div className="artwork-details">
                    <Link to={`/artworks/${artwork._id}`}>

                      <h3 className="artwork-name">{artwork.name}</h3>
                    </Link>
                    <p className="artwork-year">{formatYear(artwork.year)}</p>
                    <Link to={`/artists/${artwork.artist._id}`}>
                      <p className="artwork-artist">{artwork.artist ? artwork.artist.firstName : ""} {artwork.artist ? artwork.artist.lastName : ""}</p>
                    </Link>
                    <p className="artwork-description">{artwork.description}</p>
                  </div>
                </div>
            );
          })
          }
        </div>
      </div>
    )
  }
}

export default Artworks;