import React from "react";
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Link
} from "react-router-dom";

import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
import AboutUs from "./components/aboutUs";

const Chatapp = () => {

    return(
        <Box>
            <Router>


                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <br />
                <Switch>
                    <Route exact path="/">Home Content</Route>
                    <Route path="/about"><AboutUs /></Route>
                    <Route path="*">No Match</Route>
                </Switch>


                
            </Router>
        </Box>
    );

};

export default Chatapp;