import React from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import ErrorDisplay from './ErrorDisplay'
var userJSON;
/*class InputBox extends React.Component {
    render() {
        return <input type={this.props.type} id={this.props.id} />
    }
}*/

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {name:'', password:'',error:false,errormessage: ''};
        this.login = this.login.bind(this);
        this.triggerState = this.triggerState.bind(this);
    }
    
    componentDidMount() {
        axios.get('/data/login.JSON')
        .then((response) => {
           userJSON = response.data;
       });
    }
    
    login() {
       let {name,password} = this.state;
       let validUser = userJSON.users.find(function(user) {
                return user.name == name && user.password == password;
       });
        if(validUser)
            this.props.history.push('/home'); 
        else
            this.setState({errorMessage : "Invalid credentials",
            error : true});
    }
      
    triggerState (key, event) {
        var stateObject = {};
        stateObject[key] = event.target.value
        this.setState(stateObject);
    }
    
  render(){
    return(
      <form className="App">
        <input type="text" id="UserName" value={this.state.name} onChange={(event) => this.triggerState("name", event)}/><br/>
        <input type="password" id="Password" value= {this.state.password} onChange={(event) => this.triggerState("password", event)}/><br/>
        <Button bsStyle="primary" onClick={this.login}>SUBMIT</Button><br/>
        <ErrorDisplay error={this.state.error} message={this.state.errorMessage}/>
      </form>
    );
  }
}

export const a =20;
export default hot(module)(App);