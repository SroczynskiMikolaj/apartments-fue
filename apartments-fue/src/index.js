import React from 'react';
import ReactDOM from 'react-dom/client';
// Icon font loaded once here rather than from each component that uses it.
import 'material-icons/iconfont/material-icons.css';
import './styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n/config.ts"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
