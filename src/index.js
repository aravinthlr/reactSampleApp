import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Home from "./Home.js";
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
    (<BrowserRouter>
        <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/home" component={Home}/>
     </div>
    </BrowserRouter>),
  document.getElementById("root")
);