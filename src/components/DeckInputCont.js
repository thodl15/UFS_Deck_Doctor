import { connect } from 'react-redux';
import { updateDecklist } from '../reducers/actions';

import DeckInputPres from './DeckInputPres';

const mapStateToProps = state => ({
    deck: state.decklist
})

const mapDispatchToProps = dispatch => ({
    updateDecklist: () => dispatch(updateDecklist())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)