import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Films from './Films';

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Jumbotron />
                <Films />
            </div>
        )
    }
}