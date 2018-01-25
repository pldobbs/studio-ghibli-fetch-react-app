import React, { Component } from 'react';

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <img className="w-75 h-75 mx-auto d-block" src={require("./studioGhibli.jpg")} alt="" />
            </div>
        )
    }
}