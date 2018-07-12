import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/';
import { Counter } from './components/Counter';

class App extends Component {
    render() {
        const store = createStore(reducers, {});
        return (
        <Provider store={store}>
            <Counter />
        </Provider>
        );
    }
}

export default App;

