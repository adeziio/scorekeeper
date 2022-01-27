import React, { Component } from 'react';
import './../css/style.css';
import { Grid, Button, Box } from '@mui/material';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    setCurrentPagePlayer = () => {
        this.props.setCurrentPage("player")
    }

    setCurrentPageMatch = () => {
        this.props.setCurrentPage("match")
    }

    setCurrentPageLeaderboard = () => {
        this.props.setCurrentPage("leaderboard")
    }

    render() {
        return (
            <>
                <div className="home-container">
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={1} >
                            <Grid container item spacing={3} justifyContent="center" alignItems="center">
                                <Grid item xs={15}>
                                    <Button variant="outlined" className="home-choice" onClick={this.setCurrentPagePlayer}>Players</Button>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={3} justifyContent="center" alignItems="center">
                                <Grid item xs={15}>
                                    <Button variant="outlined" className="home-choice" onClick={this.setCurrentPageMatch}>Match</Button>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={3} justifyContent="center" alignItems="center">
                                <Grid item xs={15}>
                                    <Button variant="outlined" className="home-choice" onClick={this.setCurrentPageLeaderboard}>Leaderboard</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </>
        )
    }
}
