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

    recordMatch = () => {
        const { players, playerPair } = this.state;
        players.forEach((player) => {
            playerPair.dateTime = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });;;
            if (player.name === playerPair.player1.name) {
                player.matches.push(playerPair);
                if (playerPair.player1.score > playerPair.player2.score) {
                    player.matches_won += 1;
                }
                if (playerPair.player1.score < playerPair.player2.score) {
                    player.matches_lost += 1;
                }
            }
            if (player.name === playerPair.player2.name) {
                player.matches.push(playerPair);
                if (playerPair.player2.score > playerPair.player1.score) {
                    player.matches_won += 1;
                }
                if (playerPair.player2.score < playerPair.player1.score) {
                    player.matches_lost += 1;
                }
            }
        })
        players.sort((a, b) => {
            if (a.matches_won > b.matches_won) {
                return -1;
            }
            if (a.matches_won < b.matches_won) {
                return 1;
            }
            return 0;

        })
    }

    render() {
        const { currentPage, players, playerPair } = this.state;

        return (
            <>
                <NavBar currentPage={currentPage} setCurrentPage={this.setCurrentPage} />
                <div className="main-container">
                    {currentPage === "home" ? <HomePage currentPage={currentPage} setCurrentPage={this.setCurrentPage} /> : null}
                    {currentPage === "score" ? <ScorePage players={players} playerPair={playerPair} setPlayerPair={this.setPlayerPair} recordMatch={this.recordMatch} /> : null}
                    {currentPage === "player" ? <PlayerPage players={players} setPlayers={this.setPlayers} /> : null}
                    {currentPage === "leaderboard" ? <LeaderBoardPage players={players} /> : null}
                </div>
            </>
        )
    }
}