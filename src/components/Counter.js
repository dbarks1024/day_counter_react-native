import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { CardSection, Card } from './common';

class Counter extends Component {
    render() {
        return (
            <Card>

                <CardSection>
                    <Text style={styles.dayTextStyles} >10</Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    dayTextStyles: {
        fontSize: 30,
    }
}

export default Counter;