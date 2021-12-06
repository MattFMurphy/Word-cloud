import "./Sass/index.scss"; //Misc sass
import "./Misc/topics.json"; //Needed to fetch locally

import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";

ReactDOM.render(<App />, document.querySelector("#root"));
