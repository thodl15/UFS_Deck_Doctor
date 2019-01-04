import React from 'react';
import SpamFoundationChart from './charts/SpamFoundationChart/ChartCont';

import '../stylesheets/DeckStats.css';

const DeckStatsPres = ({deck, getStats}) => (
    <div className={"DeckStatsContainer"}>
        {"Deck Stats Here"}
        <br/>
        <SpamFoundationChart
            deck = {deck}
        />
    </div>
)

export default DeckStatsPres;