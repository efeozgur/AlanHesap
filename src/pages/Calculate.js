import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';


class Calculate extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <ImageBackground style={styles.fixed2} source={require('../img/bg3.jpg')} />
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
    },

    fixed2: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.3
    },
}

export default Calculate; 