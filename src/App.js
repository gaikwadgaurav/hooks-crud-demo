import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutingComp from './routes/RoutingComp';
import Forms from './components/forms/form';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
//import NavBar from "./components/NavBar";

function App() {
    return (
        <Router>
        <Switch>
            <Route path="/addUser" component={Forms}></Route>
        </Switch>
        </Router>
    );
}

export default App;
