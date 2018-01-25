import React, { Component } from 'react';
import Card from './Card';

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
                <Card film={this.state.films} />
            </div>
        )
    }
}