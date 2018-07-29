import React, { Component } from 'react'
import axios from 'axios';
import './AddArtwork.scss';
// import {monthsInYear, maxDaysInMonth} from '../../constants';

class AddArtwork extends Component {
    state = {
        name: undefined,
        year: undefined,
        image: null,
        description: undefined,
        medium: undefined,
        errorMessage: "",
        id: undefined,
    };

    async componentDidMount() {
        const { artwork_id } = this.props.match.params;
        const artwork = await this.getArtwork(artwork_id);
        // this.setState({ editArtist: artist });
        this.prepareArtworkToEdit(artwork);
    }

    getArtwork = async (artwork_id) => {
        const res = await axios.get(`/artworks/${artwork_id}`)
        return res.data;
    }

    prepareArtworkToEdit = (artwork) => {
        // console.log(artwork);

        const name = artwork.name;
        const year = parseInt(artwork.year);
        const image = artwork.image;
        const description = artwork.description;
        const medium = artwork.medium;
        const id = artwork._id;


        // console.log("THIS ATWORK", name, year, image, description, medium);

        this.setState({
            name, 
            year, 
            image,
            description,
            medium,
            id
        });

    }

    handleArtworkChange = (event) => {


        const name = event.target.name;
        const value = event.target.value;
 
        this.setState({
            
        [name]: value
    
        });
    }

    packageArtwork = () => {
        const artwork =  {
            name: this.state.name,
            year: new Date(this.state.year),
            image: this.state.image,
            description: this.state.description,
            medium: this.state.medium,
        };

        this.onSubmit(artwork);
    }

    pushNewArtwork = async (artistId, artwork) => {

        try {
            const res = await axios.post(`/artists/${artistId}`, artwork);

            if (res) {
                this.props.getArtists();
                this.props.history.push(`/artists/${artistId}`);

            }
        } catch (e) {
            console.error(e);
        }

    }

    editExistingArtwork = async (artworkId, artwork, artistId) => {

        // console.log("EDITING ARTWORK");

        try {
            // console.log('EDIT!');
            const res = await axios.patch(`/artworks/${artworkId}`, artwork);
            // console.log("res is", res);

            if (res) {

                this.props.getArtists();
                // console.log("res exists", res);
                this.props.history.push(`/artists/${artistId}`);
            }
        } catch(e) {

            console.log("error is", e);

        }

    }

    onSubmit = async (artwork) => {
        
        const artistId = this.props.match.params.artist_id;
        console.log("artistId", artistId);
        
        if (!this.props.edit) {
            this.pushNewArtwork(artistId, artwork);
        } else {

            const artworkId = this.state.id;
            if (artworkId) {
                this.editExistingArtwork(artworkId, artwork, artistId);
            }
        }
    }

    render () {

        // console.log("props", this.props);

        // console.log("artist id", artistId);

        return (
            <div className="add-artwork-container">
                <h2>Add an Artwork</h2>
                <form>
                    <input name="name" type="text" value={this.state.name} placeholder="name" onChange={this.handleArtworkChange}/>
                    <input name="year" type="text" value={this.state.year} placeholder="year" onChange={this.handleArtworkChange}/>
                    <input name="image" type="text" value={this.state.image} placeholder="image url" onChange={this.handleArtworkChange}/>
                    <input name="medium" type="text" value={this.state.medium} placeholder="medium" onChange={this.handleArtworkChange} />
                    <textarea name="description" value={this.state.description} placeholder="description" onChange={this.handleArtworkChange}></textarea>
                </form>
                <button onClick={this.packageArtwork}>Add this artwork</button>
            </div>
        );
    }
}

export default AddArtwork;