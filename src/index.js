import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";
import {store } from './store/store.js'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
