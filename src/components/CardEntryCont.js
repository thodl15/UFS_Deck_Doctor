import { connect } from 'react-redux';
import { incrementCardCount,
         decrementCardCount } from '../reducers/actions';

import CardEntryPres from './CardEntryPres';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    incCardCount: id => dispatch(incrementCardCount(id)),
    decCardCount: id => dispatch(decrementCardCount(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardEntryPres);