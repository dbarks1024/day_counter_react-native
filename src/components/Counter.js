import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { CardSection, Card } from './common';
import { restartTime } from '../actions';

class Counter extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text style={styles.dayTextStyles} >{this.props.time}</Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    dayTextStyles: {
        fontSize: 30,
    }
};

const mapStateToProps = state => {
    return { time: state.time.time };
};

export default connect(mapStateToProps, { restartTime })(Counter);
