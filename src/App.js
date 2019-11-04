import React from 'react';

import { Provider } from "react-redux";

import A from "./components/A"
import B from "./components/B"
import './App.css';

function App(props) {
  return (
    <Provider store={props.store}>
      <div className="App">
        <A />
        <B />
      </div>
    </Provider>
  );
}

export default App;
