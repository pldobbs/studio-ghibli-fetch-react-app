import React, { Component } from 'react';

export default class Film extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron jumbotron-fluid">
                    <img className="w-75 h-75 mx-auto d-block" src={require("./studioGhibli.jpg")} alt="" />
                </div>
                <div className="card col-md-6" style={{ width: '20rem' }} key={film.id}>
                    <img className="card-img-top w-100" src={require('./studioGhibliWorld.jpg')} alt="Card image cap" />
                    <div className="card-block">
                        <h2 className="card-title">{film.title}</h2>
                        <p className="card-text">{film.description.substring(0, 350)}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{film.director}</li>
                        <li className="list-group-item">{film.producer}</li>
                        <li className="list-group-item">{film.release_date}</li>
                    </ul>
                </div>
            </div>
        )
    }
}