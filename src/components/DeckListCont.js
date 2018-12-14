import React from 'react';

import { connect } from 'react-redux';

import DeckListPres from './DeckListPres';
import CardEntryPres from './CardEntryPres';

const mapStateToProps = state => ({
    deck: createCardEntries(state.deck)
})

const mapDispatchToProps = dispatch => ({

})

function createCardEntries(deck) {
    var outputArray = [];
    deck.forEach(x => {
        outputArray.push(
            <CardEntryPres
                key = {x.id}
                card = {x}
            />
        )
    })
    return outputArray;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckListPres);