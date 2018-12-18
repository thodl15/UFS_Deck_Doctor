import React from 'react';

import '../stylesheets/DeckList.css';

const CardEntryPres = ({ card, decCardCount, incCardCount }) => (
    <div className={"cardEntryContainer"}>
        <div className={"cardCounterContainer"}>
            <div id={`${card.id}-inc`} 
                className={"cardCounterButton"} 
                onClick={e => decCardCount(parseInt(e.target.id.split('-')[0]))}
            > - </div>
            {`${card.count}`}
            <div id={`${card.id}-inc`}
                className={"cardCounterButton"}
                onClick={e => incCardCount(parseInt(e.target.id.split('-')[0]))}
            > + </div>
        </div>
        <div className={"cardNameContainer"}>
            {`${card.name}`}
        </div>
    </div>
)

export default CardEntryPres;