import React from 'react';

import '../stylesheets/DeckStats.css';

const DeckStatsPres = ({deck, getStats}) => (
    <div className={"DeckStatsContainer"}>
        Deck Stats Here
        {getStats(deck)}
    </div>
)

export default DeckStatsPres;