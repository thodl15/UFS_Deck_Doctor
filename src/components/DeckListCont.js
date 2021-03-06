import React from 'react';

import { connect } from 'react-redux';

import DeckListPres from './DeckListPres';
import CardEntryCont from './CardEntryCont';

const mapStateToProps = state => ({
    deck: createCardEntries(state.deck)
})

const mapDispatchToProps = dispatch => ({

})

function createCardEntries(deck, funcs) {
    var outputArray = [];
    outputArray.push(
        <div key={"header"} className={"decklistHeader"}>
            Current Deck
        </div>
    );
    deck.forEach(x => {
        outputArray.push(
            <CardEntryCont
                key = {x.id}
                card = {x}
            />
        )
    });
    outputArray.push(
        <div key={"footer"} className={"decklistFooter"}>
        
        </div>
    )

    return outputArray;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckListPres);