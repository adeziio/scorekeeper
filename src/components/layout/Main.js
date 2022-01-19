import React, { Component } from 'react';
import './../css/style.css';
import NavBar from './NavBar';
import Home from './Home';
import Score from './Score';
import Player from './Player';
import Bracket from './Bracket';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "home"
        }
    };

    setCurrentPage = (newPage) => {
        this.setState({
            currentPage: newPage
        })
    }

    render() {
        const { currentPage } = this.state;

        return (
            <>
                <NavBar currentPage={currentPage} setCurrentPage={this.setCurrentPage} />
                <div className="main-container">
                    {currentPage === "home" ? <Home currentPage={currentPage} setCurrentPage={this.setCurrentPage} /> : null}
                    {currentPage === "score" ? <Score /> : null}
                    {currentPage === "player" ? <Player /> : null}
                    {currentPage === "bracket" ? <Bracket /> : null}
                </div>
            </>
        )
    }
}