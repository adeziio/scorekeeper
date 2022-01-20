import React, { Component } from 'react';
import './../css/style.css';
import { TextField, Button, Container, Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export default class PlayerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            players: this.props.players,
            error: false
        }
    };

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.addPlayer();
        }
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    isDuplicate = (arr, str) => {
        let isDup = false;
        arr.forEach((item) => {
            if (item.name === str) {
                isDup = true;
            }
        })
        return isDup;
    }

    addPlayer = () => {
        if (this.state.input !== "" && !this.isDuplicate(this.state.players, this.state.input)) {
            this.setState((prevState) => ({
                input: "",
                players: [
                    ...prevState.players,
                    {
                        "name": this.state.input,
                        "score": 0
                    }
                ],
                error: false
            }), () => {
                this.props.setPlayers(this.state.players);
            })
        }
        else {
            this.setState({
                error: true
            })
        }
    }

    removePlayer = (name) => {
        let newPlayers = this.state.players.filter(player => player.name !== name);
        this.setState({
            players: newPlayers
        }, () => {
            this.props.setPlayers(this.state.players);
        })
    }

    render() {
        const { input, players, error } = this.state;

        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));

        return (
            <>
                <TextField className="player-input" label="Name" variant="outlined" onChange={this.handleInput} onKeyDown={this._handleKeyDown} value={input} />
                <Button className="add-player-bttn" variant="contained" onClick={this.addPlayer}>Add Player</Button>
                {error ? <p className="error-msg">Duplicate/Invalid input</p> : null}
                {players.length !== 0 ?
                    <Container maxWidth="sm" className="playerlist-container">
                        <Stack direction="column" spacing={3}>
                            {players.map((player, index) => {
                                return (
                                    <>
                                        <Item key={index}>{player.name} <Button className="remove-player-bttn" variant="contained" onClick={() => { this.removePlayer(player.name) }}>Remove</Button></Item>
                                    </>
                                )
                            })}
                        </Stack>
                    </Container>
                    : null}
            </>
        )
    }
}