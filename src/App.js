import React, { Component } from 'react';

import DeckInputCont from './components/DeckInputCont';
import DeckListCont from './components/DeckListCont';
import DeckStatsCont from './components/DeckStatsCont';

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
