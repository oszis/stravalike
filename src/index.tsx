import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as RouterProvider} from 'react-router-dom';
import './index.css';
import App from './pages/App.routing';
import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './core/styles/global';

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider>
            <GlobalStyles />
            <App/>
        </RouterProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
