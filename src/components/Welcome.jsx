import React, { Component } from 'react';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMouseInside: false
        }
    }
    handleMouseEnter() {
        this.setState({ isMouseInside: true })
    }
    handleMouseLeave() {
        setTimeout(() => {
            this.setState({ isMouseInside: false })
        }, 8000)
    }
    render() {
        return (
            <div className="container">
                <div onMouseOver={() => { this.handleMouseEnter() }}
                    onMouseOut={() => { this.handleMouseLeave() }}
                    className="text-center">
                    <img className="w-100 mx-auto d-block"
                        src={require("./welcomeGhibli.jpg")} alt="" />
                    {this.state.isMouseInside ? <button type="button" className="btn btn-primary btn-lg btn-block">Continue to Films</button>
                        : null}
                </div>
            </div>
        )
    }
}