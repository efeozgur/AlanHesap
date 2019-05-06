import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Header extends Component {
    constructor({ sayfaismi }) {
        super(sayfaismi)
    };


    render() {
        return (
            <View>
                <Text>
                    {this.props.headerText}
                </Text>
            </View>
        );
    }
}
