import React from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class InputBox extends React.Component {
    render() {
        return <input type={this.props.type} id={this.props.id}/>
    }
}

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <InputBox type="text" id='UserName'/><br/>
        <InputBox type="password" id='Password'/><br/>
        <Button bsStyle="primary">SUBMIT</Button>
      </div>
    );
  }
}

export default hot(module)(App);