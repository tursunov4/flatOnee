import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./assets/css/main.css"
import { ContextProvider } from './Context/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ContextProvider>        
       <App />
    </ContextProvider>
    </BrowserRouter>   
);


