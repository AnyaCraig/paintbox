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
    };

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
            medium: this.state.medium
        };

        this.onSubmit(artwork);
    }

    onSubmit = async (artwork) => {
        
        const artistId = this.props.match.params.artist_id;

        console.log("onsubmit artist id", artistId);

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


    render () {

        // console.log("props", this.props);

        // console.log("artist id", artistId);

        return (
            <div className="add-artwork-container">
                <h2>Add an Artwork</h2>
                <form>
                    <input name="name" type="text" placeholder="name" onChange={this.handleArtworkChange}/>
                    <input name="year" type="text" placeholder="year" onChange={this.handleArtworkChange}/>
                    <input name="image" type="text" placeholder="image url" onChange={this.handleArtworkChange}/>
                    <input name="medium" type="text" placeholder="medium" onChange={this.handleArtworkChange} />
                    <textarea name="description" placeholder="description" onChange={this.handleArtworkChange}></textarea>
                </form>
                <button onClick={this.packageArtwork}>SUBMIT</button>
            </div>
        );
    }
}

export default AddArtwork;