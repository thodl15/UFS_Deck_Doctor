import { connect } from 'react-redux';

import DeckStatPres from './DeckStatsPres';

const mapStateToProps = state => ({
    deck: state.deck
})


// NOTE:
// I'm pretty sure that I am misusing this function
// by piggy-backing my own function into its object
// definition, primarily because said function does
// not call dispatch() whatsoever.
const mapDispatchToProps = dispatch => ({
    getStats: deck => generateDeckStats(deck)
})

const generateDeckStats = deck => {
    var spamFoundations = deck.map(x => parseInt(x.diff) < 2 ? x.count : 0);
    
    if(deck.length > 0) {
        var deckSize = deck.reduce((total, card) => parseInt(total) + parseInt(card.count), 0);
    }
    
    return deck.length === 0 ? [] :
    [
        `Spam Foundations: ${(spamFoundations.reduce((total, num) => total + num)/deckSize * 100).toFixed(2)}%\n`,
        "High/Mid/Low Blocks"
    ]
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckStatPres);