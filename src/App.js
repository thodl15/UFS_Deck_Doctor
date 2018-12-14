import React, { Component } from 'react';

import DeckInputCont from './components/DeckInputCont';
import DeckListCont from './components/DeckListCont';

class App extends Component {
    render() {
        return (
            <div id={"app"}>
                <DeckInputCont />
                <div>
                    <DeckListCont />
                </div>
            </div>
        )
    }
}

export default App;
