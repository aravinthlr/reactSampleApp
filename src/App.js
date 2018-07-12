import React from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

class InputBox extends React.Component {
    render() {
        return <input type={this.props.type} id={this.props.id} onBlur={this.props.onblur}/>
    }
}

class App extends React.Component {
    login() {
        console.log('login');
    }
    
    validateUserName() {
        console.log(document.getElementById('UserName').value);
    }
    
  render(){
    return(
      <div className="App">
        <InputBox type="text" id='UserName' onblur={this.validateUserName}/><br/>
        <InputBox type="password" id='Password'/><br/>
        <Button bsStyle="primary" onClick={this.login}>SUBMIT</Button>
      </div>
    );
  }
}

export default hot(module)(App);