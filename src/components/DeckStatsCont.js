import { connect } from 'react-redux';

import DeckStatPres from './DeckStatsPres';

const mapStateToProps = state => ({
    deck: state.deck
})

const mapDispatchToProps = dispatch => ({
    getStats: deck => generateDeckStats(deck)
})

const generateDeckStats = deck => {
    return deck.length === 0 ? [] :
    [
        "Spam Foundations",
        "High/Mid/Low Blocks"
    ]
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckStatPres);