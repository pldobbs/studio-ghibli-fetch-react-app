import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
// import Film from './components/Films'
import Welcome from './components/Welcome'
import { BrowserRouter, Route } from 'react-router-dom'

const app = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' exact component={Welcome} />
            <Route path='/films' component={App} />
        </div>
    </BrowserRouter>, app);