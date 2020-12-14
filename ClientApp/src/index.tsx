import "bootstrap/dist/css/bootstrap.css";
import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { App } from "./App";

// const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    rootElement);
