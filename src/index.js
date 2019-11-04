import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { indexReducer } from "./store/reducers/reducers";
import { combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";

const reducer = combineReducers({state: indexReducer});

const store = createStore(reducer)

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
