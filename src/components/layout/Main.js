import React, { Component } from 'react';
import './../css/style.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import ScorePage from './ScorePage';
import PlayerPage from './PlayerPage';
import BracketPage from './BracketPage';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "bracket",
            players: [
                {
                    "name": "A"
                },
                {
                    "name": "B"
                },
                {
                    "name": "C"
                },
                {
                    "name": "D"
                },
                {
                    "name": "E"
                },
                {
                    "name": "F"
                },
                {
                    "name": "G"
                },
                {
                    "name": "H"
                }
            ],
            matches: []
        }
    };

    componentDidMount = () => {
        this.generateMatchesByPlayers();
    }

    generateMatchesByPlayers = () => {
        let { players } = this.state;
        let matchId = 0;
        let newMatches = []

        let twoCounter = 0;
        let newNextMatchId = Math.round(players.length / 2);
        for (let i = 0; i < players.length - 1; i++) {
            if (twoCounter === 2) {
                twoCounter = 1;
                newNextMatchId++
            }
            else {
                twoCounter++;
            }
            let match = {
                "id": matchId++,
                "name": "? vs. ?",
                "tournamentRoundText": "Preliminary",
                "nextMatchId": i !== players.length - 2 ? newNextMatchId : null, // Id for the nextMatch in the bracket, if it's final match it must be null OR undefined
                "participants": [
                    {
                        "resultText": "",
                        "isWinner": false,
                        "name": "?"
                    },
                    {
                        "resultText": "",
                        "isWinner": false,
                        "name": "?"
                    }
                ]
            }
            newMatches.push(match)
        }
        console.log(newMatches)

        this.setState({
            matches: newMatches
        })
    }

    setCurrentPage = (newPage) => {
        this.setState({
            currentPage: newPage
        })
    }

    render() {
        const { currentPage, matches } = this.state;

        return (
            <>
                <NavBar currentPage={currentPage} setCurrentPage={this.setCurrentPage} />
                <div className="main-container">
                    {currentPage === "home" ? <HomePage currentPage={currentPage} setCurrentPage={this.setCurrentPage} /> : null}
                    {currentPage === "score" ? <ScorePage /> : null}
                    {currentPage === "player" ? <PlayerPage /> : null}
                    {currentPage === "bracket" ? <BracketPage matches={matches} /> : null}
                </div>
            </>
        )
    }
}