import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../components/Home';
import AddComp from "../components/AddComp";
import ListComp from "../components/ListComp";
import NavBar from "../components/NavBar";
import EditComp from "../components/EditComp";

export default function RoutingComp() {
    return (<Router>
            <NavBar/>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/user/add/" component={AddComp}></Route>
                <Route exact path="/user/list/" component={ListComp}></Route>
                <Route exact path="/user/edit/" component={EditComp}></Route>
            </div>
        </Router>
    );
}



