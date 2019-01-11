import React, { Component } from 'react';

import DeckInputCont from 'components/DeckInput/DeckInputCont';
import DeckListCont from 'components/DeckList/DeckListCont';
import DeckStatsCont from 'components/DeckStats/DeckStatsCont';

import './stylesheets/App.css';

class App extends Component {
    render() {
        return (
            <div id={"app"}>
                <DeckInputCont />
                <div className={"DeckDisplay"}>
                    <DeckListCont />
                    <DeckStatsCont />
                </div>
            </div>
        )
    }
}

export default App;
