import { combineReducers } from 'redux';

import { UPDATE_DECKLIST,
         INC_CARD_COUNT,
         DEC_CARD_COUNT } from './actions';

function deck(state = [], action) {
    switch (action.type) {
        case UPDATE_DECKLIST:
            return action.deck
        case INC_CARD_COUNT:
            return state ? state.map( card => {
                return card.id === action.id ? ({...card, count: Math.min(card.count + 1,4)}) : card
            }) : []
        case DEC_CARD_COUNT:
            return state ? state.map( card => {
                return card.id === action.id ? ({...card, count: Math.max(card.count - 1, 0)}) : card
            }) : []
        default:
            return state
    }
}

const deckActions = combineReducers({
    deck
});

export default deckActions;