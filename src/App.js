import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  async componentDidMount () {
    try {
      const response = await axios.post('/login')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div className="App">
        <p>Hello! Welcome to Paintbox!</p>
      </div>
    );		
  }
}

export default App