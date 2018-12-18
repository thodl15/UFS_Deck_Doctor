export const UPDATE_DECKLIST = 'UPDATE_DECKLIST';
export const INC_CARD_COUNT = 'INC_CARD_COUNT';
export const DEC_CARD_COUNT = 'DEC_CARD_COUNT';

export const updateDecklist = (deck) => {
    return {
        type: UPDATE_DECKLIST,
        deck
    }
}

export const incrementCardCount = id => {
    return {
        type: INC_CARD_COUNT,
        id
    }
}

export const decrementCardCount = id => {
    return {
        type: DEC_CARD_COUNT,
        id
    }
}