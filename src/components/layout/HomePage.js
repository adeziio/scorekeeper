import React, { Component } from 'react';
import './../css/style.css';
import { Grid, Button, Box } from '@mui/material';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    setCurrentPageScore = () => {
        this.props.setCurrentPage("score")
    }

    setCurrentPagePlayer = () => {
        this.props.setCurrentPage("player")
    }

    setCurrentPageBracket = () => {
        this.props.setCurrentPage("bracket")
    }

    render() {
        return (
            <>
                <div className="home-container">
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={1} >
                            <Grid container item spacing={3} justifyContent="center" alignItems="center">
                                <Grid item xs={15}>
                                    <Button variant="outlined" className="home-choice" onClick={this.setCurrentPageScore}>Score</Button>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={3} justifyContent="center" alignItems="center">
                                <Grid item xs={15}>
                                    <Button variant="outlined" className="home-choice" onClick={this.setCurrentPagePlayer}>Player</Button>
                                </Grid>
                            </Grid>
                            <Grid container item spacing={3} justifyContent="center" alignItems="center">
                                <Grid item xs={15}>
                                    <Button variant="outlined" className="home-choice" onClick={this.setCurrentPageBracket}>Bracket</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </>
        )
    }
}
