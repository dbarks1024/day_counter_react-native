import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/';
import Counter from './components/Counter';
import { Card } from './components/common/Card';

class App extends Component {
    render() {
        return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Card>
                <Counter />
            </Card>
        </Provider>
        );
    }
}

export default App;

