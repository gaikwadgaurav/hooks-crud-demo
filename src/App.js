import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutingComp from './routes/RoutingComp';

//import NavBar from "./components/NavBar";

function App() {
    return (<div className="App">
            {/*<NavBar />*/}
            <RoutingComp/>
        </div>
    );
}

export default App;
