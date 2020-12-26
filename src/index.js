import React from "react";
import ReactDOM from "react-dom";
import "./_variables.sass";
import "./index.sass";
import Machine from "./Machine";
import { StateProvider } from "./stateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <Machine />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
