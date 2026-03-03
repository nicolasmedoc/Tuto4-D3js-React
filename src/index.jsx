import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Comment <React.StrictMode> to better analyze component lifecycle without double rendering
    // enable it to find common bugs in react components (impure rendering, missing effect cleanup, missing ref cleanup)
    // see https://react.dev/reference/react/StrictMode for more information
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </React.StrictMode>
);

