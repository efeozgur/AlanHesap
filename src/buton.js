import React from 'react';
import { Dimensions, Text, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get('window');

const Buton = ({ butonText, onPress }) => {
    return (

        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.textStyle}>{butonText}</Text>
        </TouchableOpacity>


    );
}

const styles = {
    textStyle: {
        fontFamily: 'CocotteAlternate-Regular-trial',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 12,
        margin: 10,
        padding: 10,
        textAlign: 'center',
        color: '#800574',
        height: height * 0.13,
        width: width * 0.25,


    }
}
export default Buton;

