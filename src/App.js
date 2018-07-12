import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/';
import Counter from './components/Counter';
import { Card } from './components/common/Card';

class App extends Component {
    render() {
        return (
        <Provider store={createStore(reducers)}>
            <Card>
                <Counter />
            </Card>
        </Provider>
        );
    }
}

export default App;

