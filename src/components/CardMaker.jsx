import React, { Component } from 'react';

export default class CardMaker extends Component {
    render() {
        let film = this.props.film.map((film) => {
            return (
                <div className="card col-6" style={{ width: '20rem' }} key={film.id}>
                    <img className="card-img-top w-100" src={require('./studioGhibliWorld.jpg')} alt="Card image cap" />
                    <div className="card-block">
                        <h2 className="card-title">{film.title}</h2>
                        <p className="card-text">{film.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{film.director}</li>
                        <li className="list-group-item">{film.producer}</li>
                        <li className="list-group-item">{film.release_date}</li>
                    </ul>
                </div>
            )
        })
        return (
            <div className="row p-1">
                {film}
            </div>
        )

    }
}