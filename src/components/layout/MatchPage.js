import React, { Component } from 'react';
import './../css/style.css';
import { Grid, Button, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default class MatchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: {
                "name": "",
                "score": 0
            },
            player2: {
                "name": "",
                "score": 0
            }
        }
    };

    changePlayer1Name = (e) => {
        if (e.target.value !== this.state.player2.name) {
            this.setState({
                player1: {
                    "name": e.target.value,
                    "score": 0
                },
                player2: {
                    "name": this.state.player2.name,
                    "score": 0
                }
            }, () => { this.updatePlayerPair() })
        }
    }

    changePlayer2Name = (e) => {
        if (e.target.value !== this.state.player1.name) {
            this.setState({
                player1: {
                    "name": this.state.player1.name,
                    "score": 0
                },
                player2: {
                    "name": e.target.value,
                    "score": 0
                }
            }, () => { this.updatePlayerPair() })
        }
    }

    updatePlayerPair = () => {
        this.props.setPlayerPair({
            player1: this.state.player1,
            player2: this.state.player2
        })
    }

    incrementPlayer1Score = () => {
        if (this.state.player1.name !== "" && this.state.player2.name !== "") {
            this.setState(prevState => ({
                player1: {
                    "name": prevState.player1.name,
                    "score": prevState.player1.score + 1
                }
            }), () => { this.updatePlayerPair() });
        }
    }

    incrementPlayer2Score = () => {
        if (this.state.player1.name !== "" && this.state.player2.name !== "") {
            this.setState(prevState => ({
                player2: {
                    "name": prevState.player2.name,
                    "score": prevState.player2.score + 1
                }
            }), () => { this.updatePlayerPair() });
        }
    }

    decrementPlayer1Score = () => {
        if (this.state.player1.name !== "" && this.state.player2.name !== "" && this.state.player1.score !== 0) {
            this.setState(prevState => ({
                player1: {
                    "name": prevState.player1.name,
                    "score": prevState.player1.score !== 0 ? prevState.player1.score - 1 : prevState.player1.score
                }
            }), () => { this.updatePlayerPair() });
        }
    }

    decrementPlayer2Score = () => {
        if (this.state.player1.name !== "" && this.state.player2.name !== "" && this.state.player2.score !== 0) {
            this.setState(prevState => ({
                player2: {
                    "name": prevState.player2.name,
                    "score": prevState.player2.score !== 0 ? prevState.player2.score - 1 : prevState.player2.score
                }
            }), () => { this.updatePlayerPair() });
        }
    }

    resetPlayersScore = () => {
        if (this.state.player1.name !== "" && this.state.player2.name !== "" && (this.state.player1.score !== 0 || this.state.player2.score !== 0)) {
            this.setState(prevState => ({
                player1: {
                    "name": prevState.player1.name,
                    "score": 0
                },
                player2: {
                    "name": prevState.player2.name,
                    "score": 0
                }
            }), () => { this.updatePlayerPair() });
        }
    }

    resetAllFields = () => {
        if (this.state.player1.name !== "" && this.state.player2.name !== "" && (this.state.player1.score !== 0 || this.state.player2.score !== 0)) {
            this.setState({
                player1: {
                    "name": "",
                    "score": 0
                },
                player2: {
                    "name": "",
                    "score": 0
                }
            }, () => { this.updatePlayerPair() });
        }
    }

    recordMatch = () => {
        if (this.state.player1.name !== "" && this.state.player2.name !== "" && (this.state.player1.score !== 0 || this.state.player2.score !== 0)) {
            this.setState({
                player1: {
                    "name": "",
                    "score": 0
                },
                player2: {
                    "name": "",
                    "score": 0
                }
            })
            this.updatePlayerPair();
            this.props.recordMatch();
            this.resetAllFields();
        }
    }

    render() {
        const { players, playerPair } = this.props;
        console.log(playerPair.player1.score, playerPair.player2.score)


        return (
            <>
                <Box sx={{ flexGrow: 1 }} className="score-container">
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={8}>
                            <FormControl fullWidth>
                                <InputLabel>Player 1</InputLabel>
                                <Select
                                    value={playerPair.player1.name}
                                    label="Player 1"
                                    onChange={this.changePlayer1Name}
                                >
                                    {
                                        players.map((player, index) => {
                                            return (
                                                <MenuItem
                                                    key={`Player 1 ${player.name}-${index}`}
                                                    value={player.name}
                                                >
                                                    {player.name}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={8}>
                            <FormControl fullWidth>
                                <InputLabel>Player 2</InputLabel>
                                <Select
                                    value={playerPair.player2.name}
                                    label="Player 2"
                                    onChange={this.changePlayer2Name}
                                >
                                    {
                                        players.map((player, index) => {
                                            return (
                                                <MenuItem
                                                    key={`Player 2 ${player.name}-${index}`}
                                                    value={player.name}
                                                >
                                                    {player.name}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={8}>
                            <Button variant="outlined" className={`score-choice-increment ${playerPair.player1.score > playerPair.player2.score ? "winning" : "neutral"}`} onClick={this.incrementPlayer1Score}>{playerPair.player1.score}</Button>
                        </Grid>
                        <Grid item xs={8}>
                            <Button variant="outlined" className={`score-choice-increment ${playerPair.player2.score > playerPair.player1.score ? "winning" : "neutral"}`} onClick={this.incrementPlayer2Score}>{playerPair.player2.score}</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={3}>
                            <Button variant="outlined" className="score-choice-decrement" onClick={this.decrementPlayer1Score}>{"-"}</Button>
                        </Grid>
                        <Grid item xs={10}>
                            <Button variant="outlined" className="score-choice-reset" onClick={this.resetPlayersScore}>{"Reset"}</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined" className="score-choice-decrement" onClick={this.decrementPlayer2Score}>{"-"}</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }} >
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={16}>
                            <Button variant="outlined" className="score-choice-record" onClick={this.recordMatch}>{"Record Match"}</Button>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}