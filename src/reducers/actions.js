export const UPDATE_DECKLIST = 'UPDATE_DECKLIST';
export const ADD_CARD = 'ADD_CARD';

export const updateDecklist = (deck) => {
    return {
        type: UPDATE_DECKLIST,
        deck
    }
}