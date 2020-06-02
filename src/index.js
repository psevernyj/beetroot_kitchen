import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {store} from "./store";


const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
