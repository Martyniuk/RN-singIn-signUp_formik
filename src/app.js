import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Main } from 'navigation/main';
import { store } from 'config/store';

export class App extends Component {
    render () {
        return (
            <Provider store = { store }>
                <Main />
            </Provider>
        );
    }
}
