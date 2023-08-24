import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from './store'
import { Provider as ReduxProvider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store} >
    <App />
  </ReduxProvider>
);