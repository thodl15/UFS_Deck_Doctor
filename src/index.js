import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import deckActions from './reducers/reducers';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(deckActions);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();