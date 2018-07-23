import React from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

/*class InputBox extends React.Component {
    render() {
        return <input type={this.props.type} id={this.props.id} />
    }
}*/

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {name:'', password:''};
        this.login = this.login.bind(this);
        this.triggerState = this.triggerState.bind(this);
    }
    
    login() {
        console.log(this.state);
    }
    
    validateUserName() {
        console.log(document.getElementById('UserName').value);
    }
    
    triggerState (key, event) {
        console.log(event,key);
        var stateObject = {};
        stateObject[key] = event.target.value
        this.setState(stateObject);
    }
    
  render(){
    return(
      <form className="App">
        <input type="text" id="UserName" value={this.state.name} onChange={(event) => this.triggerState("name", event)}/><br/>
        <input type="password" id="Password" value= {this.state.password} onChange={(event) => this.triggerState("password", event)}/><br/>
        <Button bsStyle="primary" onClick={this.login}>SUBMIT</Button>
      </form>
    );
  }
}

export const a =20;
export default hot(module)(App);