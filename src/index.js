import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import searchFieldReducer from "./containers/reducers";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

const logger = createLogger();
const store = createStore(searchFieldReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
