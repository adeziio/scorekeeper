import React, { Component } from 'react';
import './../css/style.css';
import { Container, Stack, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import { ExpandMore, EmojiEvents, Person, Check, Clear } from '@mui/icons-material';

export default class LeaderBoardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        const { players } = this.props;

        return (
            <>
                <div className="leaderboard-header">Top 3 Winners</div>
                {players.length !== 0 ?
                    <Container maxWidth="sm" className="leaderboard-container">
                        <Stack direction="column" spacing={3}>
                            {players.slice(0, 3).map((player, index) => {
                                return (
                                    <Accordion key={`${player.name}-${index}`}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMore />}
                                        >
                                            <EmojiEvents className={"trophy " + (index === 0 ? "trophy-first" : index === 1 ? "trophy-second" : index === 2 ? "trophy-third" : "")} />
                                            <Typography component="span">
                                                <span className="bold">{`${player.name}`}</span>
                                                <span>{` | `}</span>
                                                <span>{`Win: `}</span>
                                                <span className="bold green">{`${player.matches_won}`}</span>
                                                <span>{`, `}</span>
                                                <span>{`Loss: `}</span>
                                                <span className="bold red">{`${player.matches_lost}`}</span>
                                                <span>{` | `}</span>
                                                <span>{`Total: `}</span>
                                                <span className="bold orange">{`${player.matches_won + player.matches_lost}`}</span>

                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography component="span">
                                                {player.matches.map((match, index) => {
                                                    return (
                                                        <div key={`${match.player1.name}-${index}`} className="leaderboard-expand-item">
                                                            <span>{`${match.dateTime}`}</span>
                                                            <span>{` | `}</span>
                                                            <span className="bold">{`${match.player1.name}`}</span>
                                                            <span>{`-`}</span>
                                                            <span className={`bold ${match.player1.score > match.player2.score ? "green" : "red"}`}>{`${match.player1.score}`}</span>
                                                            <span>{` vs `}</span>
                                                            <span className="bold">{`${match.player2.name}`}</span>
                                                            <span>{`-`}</span>
                                                            <span className={`bold ${match.player2.score > match.player1.score ? "green" : "red"}`}>{`${match.player2.score}`}</span>
                                                            <span>{` | `}</span>
                                                            <span className={`${match.player1.name === player.name ? match.player1.score > match.player2.score ? "green" : "red" : ""}`}>
                                                                {match.player1.name === player.name ? match.player1.score > match.player2.score ? <Check /> : <Clear /> : null}
                                                            </span>
                                                            <span className={`${match.player2.name === player.name ? match.player1.score > match.player2.score ? "red" : "green" : ""}`}>
                                                                {match.player2.name === player.name ? match.player1.score > match.player2.score ? <Clear /> : <Check /> : null}
                                                            </span>
                                                        </div>
                                                    )
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })}
                        </Stack>
                    </Container>
                    : <div>None</div>
                }

                <div className="leaderboard-header">Other Participants</div>
                {players.length !== 0 ?
                    <Container maxWidth="sm" className="leaderboard-container">
                        <Stack direction="column" spacing={3}>
                            {players.slice(3, players.length).map((player, index) => {
                                return (
                                    <Accordion key={`${player.name}-${index}`}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMore />}
                                        >
                                            <Person className="trophy" />
                                            <Typography component="span">
                                                <span className="bold">{`${player.name}`}</span>
                                                <span>{` | `}</span>
                                                <span>{`Win: `}</span>
                                                <span className="bold green">{`${player.matches_won}`}</span>
                                                <span>{`, `}</span>
                                                <span>{`Loss: `}</span>
                                                <span className="bold red">{`${player.matches_lost}`}</span>
                                                <span>{` | `}</span>
                                                <span>{`Total: `}</span>
                                                <span className="bold orange">{`${player.matches_won + player.matches_lost}`}</span>

                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography component="span">
                                                {player.matches.map((match, index) => {
                                                    return (
                                                        <div key={`${match.player1.name}-${index}`} className="leaderboard-expand-item">
                                                            <span>{`${match.dateTime}`}</span>
                                                            <span>{` | `}</span>
                                                            <span className="bold">{`${match.player1.name}`}</span>
                                                            <span>{`-`}</span>
                                                            <span className={`bold ${match.player1.score > match.player2.score ? "green" : "red"}`}>{`${match.player1.score}`}</span>
                                                            <span>{` vs `}</span>
                                                            <span className="bold">{`${match.player2.name}`}</span>
                                                            <span>{`-`}</span>
                                                            <span className={`bold ${match.player2.score > match.player1.score ? "green" : "red"}`}>{`${match.player2.score}`}</span>
                                                            <span>{` | `}</span>
                                                            <span className={`${match.player1.name === player.name ? match.player1.score > match.player2.score ? "green" : "red" : ""}`}>
                                                                {match.player1.name === player.name ? match.player1.score > match.player2.score ? <Check /> : <Clear /> : null}
                                                            </span>
                                                            <span className={`${match.player2.name === player.name ? match.player1.score > match.player2.score ? "red" : "green" : ""}`}>
                                                                {match.player2.name === player.name ? match.player1.score > match.player2.score ? <Clear /> : <Check /> : null}
                                                            </span>
                                                        </div>
                                                    )
                                                })}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })}
                        </Stack>
                    </Container>
                    : <div>None</div>
                }
            </>
        )
    }
}