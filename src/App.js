import React, { Component } from 'react';

import DeckInputCont from './components/DeckInputCont';
import DeckListCont from './components/DeckListCont';
import DeckStatsPres from './components/DeckStatsPres';

class App extends Component {
    render() {
        return (
            <div id={"app"}>
                <DeckInputCont />
                <div>
                    <DeckListCont />
                    <DeckStatsPres />
                </div>
            </div>
        )
    }
}

export default App;
