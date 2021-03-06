import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import axios from "axios";
import Users from '../Users/Users';
import Artists from '../Artists/Artists';
import Artworks from '../Artworks/Artworks';
import Artist from '../Artist/Artist';
import Artwork from '../Artwork/Artwork';
import AddArtist from '../AddArtist/AddArtist';
import AddArtwork from '../AddArtwork/AddArtwork';


class App extends Component {

  state = {
    curentUser: null,
    users: [],
    artists: [],
    artworks: [],
    artistSearchTerm: "",
  };

  login = async () => {
    const res = await axios.get('/users');
    return res.data[0];
  }

  async componentDidMount () {
    const user = await this.login();
    this.setState({ user });

    // const artists = await this.getEntity('artists');
    this.refreshArtists();
    
    // const artworks = this.assembleArtworks();
    // this.setState({artworks: artworks});
    
    const users = await this.getEntity('users');
    this.setState({users: users });
  }
  
  getEntity = async (entity) => {
    const res = await axios.get(`/${entity}`);
    return res.data;
  }
  
  refreshArtists = async () => {
    try {
      const res = await axios.get('/artists?q=' + this.state.artistSearchTerm);
      const artists = res.data;
      this.setState({ artists }, () => this.setArtworks());
    } catch(e) {
      console.error(e);
    }
  }
  
  assembleArtworks = () => {

    const artworks = [];

    // is there a better way to do this without forEach? Maybe with reduce?
    // this.state.artists.reduce((accumulator, current) => {
    //   accumulator.concat(current.artworks)
    // }, []);

    this.state.artists.forEach(artist => {

      artist.artworks.forEach(artwork => {
          const work =  { 
            name: artwork.name, 
            artist: {
              firstName: artist.firstName,
              lastName: artist.lastName,
              _id: artist._id,
            },
            image: artwork.image,
            description: artwork.description,
            year: artwork.year,
            medium: artwork.medium, 
            _id: artwork._id,
          };

          artworks.push(work);
      });
    });

    return artworks;
  }

  setArtworks = () => {
    const artworks = this.assembleArtworks();
    this.setState({artworks});
  }

  onArtistSearchChange = (e) => {
    console.log("searchTerm", e.target.value);
    this.setState({ artistSearchTerm: e.target.value}, () => this.refreshArtists());

  }



  render() {

    const { user } = this.state;

    if (!user) return <h1>You're not logged in, bro</h1>;
    return (
      <Router>
        <div className='app-container'>
        <div className="app-header">
        <Link to='/artworks'>
          <h1 className="title">Welcome to <span class="highlight">Paintbox</span>, {this.state.user.firstName}!</h1>	
        </Link>
          <div className="links">
            {/* <Link className="header-link" to='/users'>Users</Link> */}
            <Link className="header-link" to='/artists'>Artists</Link>
            <Link className="header-link" to='/artworks'>Artworks</Link>
            <Link className="header-link add-artist" to='/add-artist'>Add an artist</Link>
          </div>
        </div>
          <Route path='/users' render={()=><Users users={this.state.users}/>}/>
          <Route path='/artists' exact render={(props)=><Artists {...props} artists={this.state.artists} onSearchChange={(e) => this.onArtistSearchChange(e)} refreshArtists={() => this.refreshArtists()}/>}/>
          <Route path='/artworks' exact render={()=><Artworks artworks={this.state.artworks}/>}/>
          <Route path='/' exact render={()=><Artworks artworks={this.state.artworks}/>}/>
          <Route path='/artists/:artist_id/edit-artwork/:artwork_id' exact render={props => <AddArtwork {...props} getArtists={this.refreshArtists} edit={true}/>}/>
          <Route path='/artists/:artist_id' exact render={props => <Artist {...props} />}/>
          <Route path='/artworks/:artwork_id' render={props => <Artwork {...props} artworks={this.state.artworks} artists={this.state.artists} getArtists={this.refreshArtists} />}/>
          <Route path='/add-artist' render={props => <AddArtist {...props} getArtists={this.refreshArtists} />}/>
          <Route path='/add-artwork/:artist_id' render={props => <AddArtwork {...props} getArtists={this.refreshArtists} />}/>
          <Route path='/edit-artist/:artist_id' render={props => <AddArtist {...props} getArtists={this.refreshArtists} edit={true}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;