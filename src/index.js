import React from "react";
import ReactDom from "react-dom";
import Chatapp from "./app";

const App = () => {

    return <Chatapp />;

}


ReactDom.render(<App />, document.getElementById("root"));