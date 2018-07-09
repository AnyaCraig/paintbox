// components/Users/Users.js

import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
  state = {
  }


  async componentDidMount () {

  }

  render () {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.props.users.map(user => <li>{user.firstName} {user.lastName}</li>)}
        </ul>
      </div>
    );
  }
}

export default Users;