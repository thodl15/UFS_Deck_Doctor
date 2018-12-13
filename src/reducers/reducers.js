import { combineReducers } from 'redux';

import { UPDATE_DECKLIST } from './actions';

function deck(state = [], action) {
    switch (action.type) {
        case UPDATE_DECKLIST:
            return action.deck
        default:
            return state
    }
}

const deckActions = combineReducers({
    deck
});

export default deckActions;