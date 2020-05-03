import React from "react";
import ReactDOM from "react-dom";
import { injectGlobalStyles } from "ross-ui";
import App from "./components/App";

injectGlobalStyles();

ReactDOM.render(<App />, document.getElementById("root"));
