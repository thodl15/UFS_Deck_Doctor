import React from 'react';

import '../stylesheets/DeckList.css';

const DeckListPres = (props) => (
    <div className={"decklistContainer"}>
        {
            props.deck.length > 0 ?
                (props.deck) :
                (<div>No Deck Detected</div>)
        }
    </div>
)

export default DeckListPres;