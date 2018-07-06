// components/Users/Users.js

import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
    users: []
  }

  getUsers = async () => {
    const res = await axios.get('/users');
    return res.data;
  }

  async componentDidMount () {
    const users = await this.getUsers();
    this.setState({ users });
  }

  render () {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(user => <li>{user.firstName} {user.lastName}</li>)}
        </ul>
      </div>
    );
  }
}

export default Users;