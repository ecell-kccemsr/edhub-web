import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from "easy-peasy";
import store from "./store/store";
import App from './app/App'

ReactDOM.render((
    <StoreProvider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </StoreProvider>
), document.getElementById('root'));