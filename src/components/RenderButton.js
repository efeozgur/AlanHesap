import React from 'react';
import { Actions } from 'react-native-router-flux';
import Buton from '../buton';

const RenderButton = ({ press, text }) => {
    return (
        <Buton onPress={() => Actions.calc({ text })} butonText={text} />
    );
};

export default RenderButton; 
