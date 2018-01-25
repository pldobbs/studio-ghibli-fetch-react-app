import React, { Component } from 'react';
import CardMaker from './CardMaker';

export default class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }
    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(results => {
                return results.json();
            }).then(data => {
                let film = data
                this.setState({ films: film });
                console.log("state", this.state.films)
            })
    }
    render() {
        return (
            <div className="container">
                <CardMaker film={this.state.films} />
            </div>
        )
    }
}