import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArtworkCarousel from '../ArtworkCarousel/ArtworkCarousel';
import './Artwork.scss';

class Artwork extends Component {
  state = {
    artwork: null,
    otherWorks: [],
  };

  setArtwork = (artworkId) => {
    console.log(this.props.artworks)
    const artwork = this.props.artworks.find(artwork => artwork._id === artworkId);
    console.log(artwork);

    if (artwork && artwork.artist) {
      this.findOtherWorks(artwork);  
    }
    this.setState({ artwork });
  }

  findOtherWorks = (artwork) => {
    console.log(artwork);
    const artist = this.props.artists.find(artist => artist._id === artwork.artist._id);

    if (artist) {
      const otherWorks = this.props.artworks.filter(otherArtwork => otherArtwork._id !== artwork._id && otherArtwork.artist._id === artwork.artist._id);

      otherWorks.forEach(work => {
        work.artist = artist;
      });

      this.setState({ otherWorks });
    }
  }

  deleteArtwork = async (id) => {

    console.log("DELETING ARTWORK");
    await axios.delete(`/artworks/${id}`)
    this.props.getArtists();
    this.props.history.push('/artworks');
  }

  componentDidMount() {
    const { artwork_id } = this.props.match.params;
    this.setArtwork(artwork_id);
    // this.findOtherWorks(artwork_id);
  }

  componentWillReceiveProps(nextProps) {
    const { artwork_id } = nextProps.match.params;
    this.setArtwork(artwork_id);
  }

  render () {
    const { artwork, otherWorks } = this.state;

    const carouselRequirements = otherWorks && artwork ? true : false;
    if (!artwork) return <h2>Loading...</h2>
    return (
      <div className="artwork-detail-container">
        <div className="artwork-detail-image">
          <img src={artwork.image} alt={`${artwork.name} by ${artwork.artist.firstName} ${artwork.artist.lastName}`} />
        </div>
        <div className="artwork-detail-details">
          <h2>{artwork.name}</h2>
          <Link to={`/artists/${artwork.artist._id}`}>
            <h4>{artwork.artist.firstName} {artwork.artist.lastName}<span className="artwork-year">({parseInt(artwork.year)})</span></h4>
          </Link> 
          <p className="artwork-description">{artwork.description}</p>
        </div>
        <div className="artwork-options">
          <div className="edit-artwork-link-container">
            <Link to={`/artists/${artwork.artist._id}/edit-artwork/${artwork._id}`}>{`Edit details for ${artwork.name}`}</Link>
          </div>
          <div className="delete-artwork-container">
            <button onClick={e => this.deleteArtwork(artwork._id)}>Delete this thing</button>
          </div>
        </div>
        {carouselRequirements && (
          <div className="other-works-carousel-container">
            <p className="other-works-heading">Other works by <Link to={`/artists/${artwork.artist._id}`}>{`${artwork.artist.firstName} ${artwork.artist.lastName}`}</Link></p>
            <div className="other-works-carousel">
              <ArtworkCarousel artworks={this.state.otherWorks} artist={artwork.artist} />
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Artwork;