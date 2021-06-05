import React from "react";
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Link
} from "react-router-dom";


const Chatapp = () => {

    return(

        <Router>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/aa">aa</Link>
            <br />
            <Switch>
                <Route exact path="/">Home Content</Route>
                <Route path="/about">About Content</Route>
                <Route path="*">No Match</Route>
            </Switch>

        </Router>
        
    );

};

export default Chatapp;