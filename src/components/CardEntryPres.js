import React from 'react';

import '../stylesheets/DeckList.css';

const CardEntryPres = ({ card }) => (
    <div className={"cardEntryContainer"}>
        <div className={"cardCounterContainer"}>
            <div className={"cardCounterButton"}> - </div>
            {`${card.count}`}
            <div className={"cardCounterButton"}> + </div>
        </div>
        <div className={"cardNameContainer"}>
            {`${card.name}`}
        </div>
    </div>
)

export default CardEntryPres;