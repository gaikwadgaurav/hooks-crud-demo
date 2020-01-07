import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../components/Home';
import AddComp from "../components/AddComp";
import ListComp from "../components/ListComp";
//import NavBar from "../components/NavBar";

export default function RoutingComp() {
    return (
        <Fragment>

            <Router>
                {/* <NavBar/> */}
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/add" component={AddComp}></Route>
                    <Route exact path="/list" component={ListComp}></Route>
                </div>
            </Router>

        </Fragment>
    );
}



