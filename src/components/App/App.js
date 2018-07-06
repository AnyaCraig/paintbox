import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./App.css";
import axios from "axios";
import Users from '../Users/Users';
import Artists from '../Artists/Artists';
import Artworks from '../Artworks/Artworks';

class App extends Component {

  state = {
    user: null,
  }

  login = async () => {
    const res = await axios.get('/users');
    return res.data[0];
  }

  async componentDidMount () {
    const user = await this.login();
    this.setState({ user });
  }

  render() {

    const { user } = this.state;

    if (!user) return <h1>You're not logged in, bro</h1>;
    return (
      <Router>
        <div className='app-container'>
          <h1>Welcome, {this.state.user.firstName}!</h1>	
          <p>To see a list of users, <Link to='/users'>click here</Link></p>
          <p>To see a list of artists, <Link to='/artists'>click here</Link></p>
          <p>To see a list of artworks, <Link to='/artworks'>click here</Link></p>
          <Route path='/users' component={Users}/>
          <Route path='/artists' component={Artists}/>
          <Route path='/artworks' component={Artworks}/>
        </div>
      </Router>
    );
  }
}

export default App;