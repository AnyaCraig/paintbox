import React, { Component } from 'react'
import axios from 'axios';

class Artwork extends Component {
  state = {
    artwork: null
  };

  getArtwork = async (artwork_id) => {
    const res = await axios.get(`/artworks/${artwork_id}`)
    return res.data;
  }

  async componentDidMount() {
    const { artwork_id } = this.props.match.params;
    const artwork = await this.getArtwork(artwork_id);
    this.setState({ artwork });
  }

  async componentWillReceiveProps(nextProps) {

    const { artwork_id } = nextProps.match.params;
    const artwork = await this.getArtwork(artwork_id);
    this.setState({ artwork });

  }

  render () {
    const { artwork } = this.state;
    if (!artwork) return <h2>Loading...</h2>
    return (
      <div>
        <h2>{artwork.name}</h2>
      </div>
    )
  }
}

export default Artwork;