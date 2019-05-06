import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

class Calculate extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#800574',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },

    textStyle: {
        color: '#000',
        padding: 10,
        backgroundColor: '#fff',
        width: '100%',
        textAlign: 'center',
        fontFamily: 'VINCHAND',
    }
}

export default Calculate; 