import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/';
import Counter from './components/Counter';
import { Card, Header } from './components/common';

class App extends Component {
    render() {
        return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <View>
                <Header headerText='Day Counter' />                
                <Counter />
            </View>
        </Provider>
        );
    }
}

export default App;

