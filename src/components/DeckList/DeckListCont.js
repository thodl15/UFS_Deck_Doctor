import React from 'react';

import { connect } from 'react-redux';

import DeckListPres from './DeckListPres';
import CardEntryCont from 'components/CardEntry/CardEntryCont';

const mapStateToProps = state => ({
    deck: createCardEntries(state.deck)
})

const mapDispatchToProps = dispatch => ({

})

function createCardEntries(deck, funcs) {
    var outputArray = [];
    deck.forEach(x => {
        outputArray.push(
            <CardEntryCont
                key = {x.id}
                card = {x}
            />
        )
    });

    return outputArray;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckListPres);