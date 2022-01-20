import React, { Component } from 'react';
import './../css/style.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { EmojiEventsOutlined } from '@mui/icons-material';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    componentDidMount = () => {
        this.setState({
            active: this.props.currentPage
        })
    }

    collapseNavbar = () => {
        let hasExpanded = window.document.querySelector('.show')
        if (hasExpanded) {
            let collapseMe = window.document.getElementById('collapse-on-click')
            if (collapseMe) {
                collapseMe.click()
            }
        }
    }

    setCurrentPageHome = () => {
        this.props.setCurrentPage("home")
        this.collapseNavbar()
    }

    setCurrentPageScore = () => {
        this.props.setCurrentPage("score")
        this.collapseNavbar()
    }

    setCurrentPagePlayer = () => {
        this.props.setCurrentPage("player")
        this.collapseNavbar()
    }

    setCurrentPageLeaderboard = () => {
        this.props.setCurrentPage("leaderboard")
        this.collapseNavbar()
    }

    render() {
        const { currentPage } = this.props;

        return (
            <>
                <div className="navbar-container">
                    <Navbar className="navbar-bg" variant="light" expand="lg" >
                        <Container>
                            <Navbar.Brand><Nav.Link className="navbar-brand" onClick={this.setCurrentPageHome}>Scorekeeper <EmojiEventsOutlined /></Nav.Link></Navbar.Brand>
                            <Navbar.Toggle id="collapse-on-click" aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link className={`navbar-item ${currentPage === "score" ? "active" : ""}`} onClick={this.setCurrentPageScore}>Score</Nav.Link>
                                    <Nav.Link className={`navbar-item ${currentPage === "player" ? "active" : ""}`} onClick={this.setCurrentPagePlayer}>Players</Nav.Link>
                                    <Nav.Link className={`navbar-item ${currentPage === "leaderboard" ? "active" : ""}`} onClick={this.setCurrentPageLeaderboard}>Leaderboard</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        )
    }
}