import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as RouterProvider} from 'react-router-dom';
import App from './pages/App.routing';
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
