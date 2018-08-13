import React from "react";
import {
    hot
} from "react-hot-loader";
import "./App.css";
import {
    Button
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import ErrorDisplay from './ErrorDisplay'
var userJSON;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            error: false,
            errormessage: ''
        };
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
        let validUser = userJSON.users.find(function (user) {
            return user.name == name && user.password == password;
        });
        if (validUser)
            this.props.history.push('/home');
        else
            this.setState({
                errorMessage: "Invalid credentials",
                error: true
            });
    }
    
    keyPress(e){
      if(e.keyCode == 13){
         this.login();
         // put the login here
      }
    }

    triggerState(key, event) {
        console.log(event);
        var stateObject = {};
        stateObject[key] = event.target.value
        this.setState(stateObject);
    }

    render() {
        return ( 
            <div className="full-height login-wall green">
				<h1 align="center">React MVP</h1> 
				<div className="row ">
					<form className = "App offset-sm-5" >
						<div className="form-group">
							<label htmlFor="UserName">Name:</label>
							<input type="text" className="form-control" value = {this.state.name} id="UserName" onChange = {(event) => this.triggerState("name", event)}/>
						</div>

						<div className="form-group">
						  <label htmlFor="Password">Password:</label>
						  <input type="password" className="form-control" value = {this.state.password} onKeyDown={(event) => this.keyPress(event)} id="Password" onChange = {(event) => this.triggerState("password", event)}/>
						</div>
						<Button bsStyle = "primary" className = "offset-sm-4"
						onClick = {this.login} > SUBMIT < /Button><br/ >
						<ErrorDisplay error = {this.state.error} message = {this.state.errorMessage}/> 
					</form>
				</div>
			</div>
        );
    }
}

export default hot(module)(App);
