import React from 'react';

import '../stylesheets/DeckList.css';

const DeckListPres = (props) => (
    <div className={"decklistContainerWrapper"}>
        {
            props.deck.length > 2 ?
                (<div className={"decklistContainer"}>
                    {props.deck}
                </div>) :
                (<div>No Deck Detected</div>)
        }
    </div>
)

export default DeckListPres;