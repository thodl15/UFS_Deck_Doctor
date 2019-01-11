import React from 'react';


import { connect } from 'react-redux';
import { updateDecklist,
         setCardDictionary } from 'reducers/actions';

import DeckInputPres from './DeckInputPres';

const mapStateToProps = state => ({
    deck: state.deck,
    cardKeyDict: state.cardIDs
})

const mapDispatchToProps = dispatch => ({
    updateDecklist: (deck) => dispatch(updateDecklist(deck)),
    initializeCardDictionary: (map) => dispatch(setCardDictionary(map))
})

class DeckInputCont extends React.Component {
    
    componentDidMount() {
        fetch('http://localhost:8080/api/Cards?getMinimal=true', {
            method: "GET"
        }).then(response =>
            response.json() 
        ).then(data => {
            console.log("Acquired card ID map. Now saving to global state...");
            this.props.initializeCardDictionary(data);
        })
    }

    render() {
        return (
            <DeckInputPres
                {...this.props}
            />
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckInputCont);