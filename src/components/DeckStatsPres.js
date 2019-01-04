import React from 'react';
import SpamFoundationChart from './charts/SpamFoundationChart/ChartCont';
import BlockZoneChart from './charts/BlockZoneChart/ChartCont';

import '../stylesheets/DeckStats.css';

const DeckStatsPres = ({deck, getStats}) => (
    <div className={"DeckStatsContainer"}>
        {"Deck Stats Here"}
        <br/>
        <SpamFoundationChart
            deck = {deck}
        />
        <br/>
        <BlockZoneChart
            deck = {deck}
        />
    </div>
)

export default DeckStatsPres;