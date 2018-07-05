import React, { Component } from "react";
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
        <h1>PAINTBOX</h1>
      </div>
    );		
  }
}

export default App;