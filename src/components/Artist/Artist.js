import React, { Component } from 'react'
import axios from 'axios';
import ArtworkCarousel from '../ArtworkCarousel/ArtworkCarousel';

import { formatLongDate } from '../../helpers';

class Artist extends Component {
  state = {
    artist: null
  };

  getArtist = async (artist_id) => {
    const res = await axios.get(`/artists/${artist_id}`)
    return res.data;
  }

  async componentDidMount() {
    const { artist_id } = this.props.match.params;
    const artist = await this.getArtist(artist_id);
    this.setState({ artist });
  }

  async componentWillReceiveProps(nextProps) {

    const { artist_id } = nextProps.match.params;
    const artist = await this.getArtist(artist_id);
    this.setState({ artist });

  }

//   async componentWillReceiveProps() {
//     const artist = await this.getArtist();
//     this.setState({ artist });
//   }

  render () {
    const { artist } = this.state;
    if (!artist) return <h2>Loading...</h2>
    return (
      <div className="artist-detail-box">
        <div className="artist-detail-image">
            <img src={artist.image} alt={`A photograph of ${artist.firstName} ${artist.lastName}`} />
        </div>
        <div className="artist-detail-details">
            <h2 className="artist-name">{artist.firstName} {artist.lastName}</h2>
            <p className="artist-birth-death">{formatLongDate(artist.birthDate)} - {formatLongDate(artist.deathDate)}</p>
            <p className="artist-description">{artist.description}</p>
        </div>
        <div className="artist-artwork-slider">
            <ArtworkCarousel artworks={artist.artworks}/>
        </div>
      </div>
    )
  }
}

export default Artist;