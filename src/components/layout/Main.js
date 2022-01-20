import React, { Component } from 'react';
import './../css/style.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ScorePage from './ScorePage';
import PlayerPage from './PlayerPage';
import LeaderBoardPage from './LeaderBoardPage';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "home",
            players: [],
        }
    };

    setCurrentPage = (newPage) => {
        this.setState({
            currentPage: newPage
        })
    }

    setPlayers = (newPlayers) => {
        this.setState({
            players: newPlayers
        })
    }

    render() {
        const { currentPage, players } = this.state;
        console.log(this.state)

        return (
            <>
                <NavBar currentPage={currentPage} setCurrentPage={this.setCurrentPage} />
                <div className="main-container">
                    {currentPage === "home" ? <HomePage currentPage={currentPage} setCurrentPage={this.setCurrentPage} /> : null}
                    {currentPage === "score" ? <ScorePage /> : null}
                    {currentPage === "player" ? <PlayerPage players={players} setPlayers={this.setPlayers} /> : null}
                    {currentPage === "leaderboard" ? <LeaderBoardPage /> : null}
                </div>
            </>
        )
    }
}