import React from 'react';
import { Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import { Fonts } from "./utils/Fonts";
const { width, height } = Dimensions.get('window');

const Buton = ({ butonText }) => {
    return (

        <TouchableOpacity activeOpacity={0.7} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.textStyle}>{butonText}
                {<Image source={require('./img/buton.png')} />}

            </Text>
        </TouchableOpacity>


    );
}

const styles = {
    textStyle: {
        fontFamily: 'Gugi-Regular',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 20,
        margin: 10,
        padding: 10,
        textAlign: 'center',
        color: '#800574',
        height: height * 0.10,
        width: width * 0.25,


    }
}
export default Buton;

