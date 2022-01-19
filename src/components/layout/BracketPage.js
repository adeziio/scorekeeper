import React, { Component } from 'react';
import './../css/style.css';
import { SingleEliminationBracket, Match, SVGViewer, createTheme } from '@g-loot/react-tournament-brackets';

export default class BracketPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        const { matches } = this.props;
        const WhiteTheme = createTheme({
            textColor: { main: '#000000', highlighted: '#07090D', dark: '#3E414D' },
            matchBackground: { wonColor: 'lightgreen', lostColor: 'lightgrey' },
            score: {
                background: { wonColor: 'yellow', lostColor: 'lightgrey' },
                text: { highlightedWonColor: 'lightgreen', highlightedLostColor: 'lightgreen' },
            },
            border: {
                color: '#CED1F2',
                highlightedColor: '#da96c6',
            },
            roundHeader: { backgroundColor: '#da96c6', fontColor: '#000' },
            connectorColor: '#CED1F2',
            connectorColorHighlight: '#da96c6',
            svgBackground: '#FAFAFA',
        });
        return (
            <>
                {matches.length !== 0 ?
                    <SingleEliminationBracket
                        matches={matches}
                        matchComponent={Match}
                        theme={WhiteTheme}
                        options={{
                            style: {
                                roundHeader: {
                                    backgroundColor: WhiteTheme.roundHeader.backgroundColor,
                                    fontColor: WhiteTheme.roundHeader.fontColor,
                                },
                                connectorColor: WhiteTheme.connectorColor,
                                connectorColorHighlight: WhiteTheme.connectorColorHighlight,
                            },
                        }}
                    // svgWrapper={({ children, ...props }) => (
                    //     <SVGViewer
                    //         background={WhiteTheme.svgBackground}
                    //         SVGBackground={WhiteTheme.svgBackground}
                    //         width={2000}
                    //         height={500}
                    //         {...props}>
                    //         {children}
                    //     </SVGViewer>
                    // )}
                    />
                    : null
                }
            </>
        )
    }
}