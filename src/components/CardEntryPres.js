import React from 'react';

import '../stylesheets/DeckList.css';

const CardEntryPres = ({ card, decCardCount, incCardCount }) => (
    <div className={"cardEntryContainer"}>
        <div className={"cardCounterContainer"}>
            <div id={`${card.id}_inc`} 
                className={"cardCounterButton"} 
                onClick={e => decCardCount(e.target.id.split('_')[0])}
            > - </div>
            {`${card.count}`}
            <div id={`${card.id}_inc`}
                className={"cardCounterButton"}
                onClick={e => incCardCount(e.target.id.split('_')[0])}
            > + </div>
        </div>
        <div className={"cardNameContainer"}>
            {`${card.name}`}
        </div>
    </div>
)

export default CardEntryPres;