// components/Artists/Artists.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Artists.scss';

import { formatYear } from '../../helpers';

class Artists extends Component {

  render () {
    return (
      <div className="artists-root">
        <h2>Artists</h2>
        <div className="artists-container">
          {this.props.artists.map(artist => {
            return (
              <Link to={`/artists/${artist._id}`}>
                <div className="artist-box">
                  <div className="artist-image">
                    <img src={artist.image} alt={`A portrait of ${artist.name}`}/>
                  </div>
                  <div className="artist-details">
                    <h3>{artist.firstName} {artist.lastName}</h3>
                    <p>{formatYear(artist.birthDate)} - {formatYear(artist.deathDate)}</p>
                  </div>
                </div>
              </Link>
              
      
            );
          })}
        </div>
      </div>
    )
  }
}

export default Artists;