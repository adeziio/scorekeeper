import React, { Component } from 'react';
import './../css/style.css';
import { Container, Stack, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import { ExpandMore, EmojiEvents } from '@mui/icons-material';

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
                                            <Typography component="span">{`${player.name} | Total: ${player.matches_won + player.matches_lost} (Win: ${player.matches_won} Loss: ${player.matches_lost})`}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography component="span">
                                                {player.matches.map((match, index) => {
                                                    return (
                                                        <div key={`${match.player1.name}-${index}`} className="leaderboard-expand-item">
                                                            {`${match.dateTime} | ${match.player1.name}-${match.player1.score} vs. ${match.player2.name}-${match.player2.score}`}
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
                    : null
                }

                <div className="leaderboard-header">Participants</div>
                {players.length !== 0 ?
                    <Container maxWidth="sm" className="leaderboard-container">
                        <Stack direction="column" spacing={3}>
                            {players.slice(3, players.length).map((player, index) => {
                                return (
                                    <Accordion key={`${player.name}-${index}`}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMore />}
                                        >
                                            <Typography component="span">{`${player.name} | Total: ${player.matches_won + player.matches_lost} (Win: ${player.matches_won} Loss: ${player.matches_lost})`}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography component="span">
                                                {player.matches.map((match, index) => {
                                                    return (
                                                        <div key={`${match.player1.name}-${index}`} className="leaderboard-expand-item">
                                                            {`${match.dateTime} | ${match.player1.name} - ${match.player1.score} vs ${match.player2.name} - ${match.player2.score} `}
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
                    : null
                }
            </>
        )
    }
}