import "./style.css";
import React, { Component } from "react";
import Header from "./Components/Header/Header";
import InstaPost from "./Components/InstaPost/InstaPost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <InstaPost />
      </div>
    );
  }
}

export default App;
