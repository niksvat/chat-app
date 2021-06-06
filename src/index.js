import React from "react";
import ReactDom from "react-dom";
import Chatapp from "./app";

import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const App = () => {

    return <Chatapp />;

}

const theme = createMuiTheme({

       palette:{
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[500]
        }
       }

});

const initialStore = {};
const store = configureStore(initialStore);

ReactDom.render(

    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>

, document.getElementById("root"));