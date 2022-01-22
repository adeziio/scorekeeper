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
            playerPair: {
                player1: {
                    "name": "",
                    "score": 0
                },
                player2: {
                    "name": "",
                    "score": 0
                }
            }
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

    setPlayerPair = (newPlayerPair) => {
        this.setState({
            playerPair: newPlayerPair
        })
    }

    render() {
        const { currentPage, players, playerPair } = this.state;
        console.log(this.state)

        return (
            <>
                <NavBar currentPage={currentPage} setCurrentPage={this.setCurrentPage} />
                <div className="main-container">
                    {currentPage === "home" ? <HomePage currentPage={currentPage} setCurrentPage={this.setCurrentPage} /> : null}
                    {currentPage === "score" ? <ScorePage players={players} playerPair={playerPair} setPlayerPair={this.setPlayerPair} /> : null}
                    {currentPage === "player" ? <PlayerPage players={players} setPlayers={this.setPlayers} /> : null}
                    {currentPage === "leaderboard" ? <LeaderBoardPage /> : null}
                </div>
            </>
        )
    }
}