import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { applyMiddleware, createStore, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { searchFieldReducer, fetchRobotsReducer } from "./containers/reducers";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";

const logger = createLogger();
const rootReducer = combineReducers({ searchFieldReducer, fetchRobotsReducer });
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
