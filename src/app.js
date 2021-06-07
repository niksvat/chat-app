import React from "react";
import { createUseStyles } from "react-jss";
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Link
} from "react-router-dom";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";

import AboutUs from "./components/aboutUs";
import MainArea from "./components/main";

const useStyles = createUseStyles({
    content: {
        marginTop: "60px"
    }
});

const Chatapp = () => {

    const classes = useStyles();



    return( 
        <Router>

            <Box>
                <Route exact path={["/", "/about"]} render={(history)=>(
                    <AppBar>
                        <Tabs value={history.location.pathname}>
                            <Tab value="/" label="home" component={Link} to="/" />
                            <Tab value="/about" label="about" component={Link} to="/about" />
                        </Tabs> 
                    </AppBar>  
                )}
                />
            </Box>

            <Box  className={classes.content} >        
                <Switch>
                    <Route exact path="/" component={MainArea} />
                    <Route path="/about" component={AboutUs}  />
                    <Route path="*">No Match</Route>
                </Switch>
            </Box>


        </Router>
        
    );

};

export default Chatapp;