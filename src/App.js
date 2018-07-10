import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World! test</h1>
      </div>
    );
  }
}
console.log('123',module);
export default hot(module)(App);