import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { CardSection, Card, Button } from './common';
import { restartTime, loadCurrentTime } from '../actions';

class Counter extends Component {
    componentWillMount() {
        this.props.loadCurrentTime();
    }

    render() {
        return (
            <Card>
                <CardSection style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.dayTextStyles} >{this.props.time}</Text>
                </CardSection>
                <CardSection>
                    <Button
                    onPress={this.props.restartTime.bind(this)}
                    >Restart</Button>
                    <Button
                    onPress={this.props.loadCurrentTime.bind(this)} 
                    >
                    Refresh
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    dayTextStyles: {
        fontSize: 100,
    }
};

const mapStateToProps = state => {
    return { time: state.time.time };
};

export default connect(mapStateToProps, { restartTime, loadCurrentTime })(Counter);
