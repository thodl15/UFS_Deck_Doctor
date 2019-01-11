import React from 'react';

import 'stylesheets/DeckList.css';

const DeckListPres = (props) => (
    <div className={"decklistContainerWrapper"}>
        {
            props.deck.length > 2 ?
                (<div className={"decklistContainer"}>
                    <div key={"header"} className={"decklistHeader"}>
                        Current Deck
                    </div>
                    {props.deck}
                    <div key={"footer"} className={"decklistFooter"}>
                        <button className="updateDeckBtn">Update</button>
                    </div>
                </div>
                ) :
                (<div>No Deck Detected</div>)
        }
    </div>
)

export default DeckListPres;