/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

import { createStore } from "redux";
import rootSaga from "./store/sagas";
import { contentReducer as content, buttonReducer as button } from "./store/reducers/"


const rootReducer = combineReducers({
    content,
    button
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
