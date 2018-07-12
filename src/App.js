import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/';
import Counter from './components/Counter';

class App extends Component {
    render() {
        const store = createStore(reducers);
        return (
        <Provider store={store}>
            <View>
                <Counter />
            </View>
        </Provider>
        );
    }
}

export default App;

