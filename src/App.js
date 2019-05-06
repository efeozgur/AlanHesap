/* eslint-disable global-require */

import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';

import RenderButton from './components/RenderButton';


export default class App extends Component {
  state = {
    sayfaismi: '',
  }


  render() {
    let a = 123;
    return (

      <View style={styles.viewStyles}>
        <ImageBackground style={styles.fixed2} source={require('./img/bg3.jpg')} />
        <View style={styles.subViewStyles}>
          <ImageBackground style={styles.fixed} source={require('./img/bg3.jpg')} />
          <Text style={styles.textStyles}>Çevre ve Alan Hesaplama Araçları</Text>
        </View>
        <View style={styles.altViewStyles}>
          <RenderButton text="Dikdörtgen Çevre ve Alan Hesaplama" />
          <RenderButton text="Kare Çevre ve Alanı Hesaplama" />
          <RenderButton text="Dik Üçgen Çevre ve Alanı Hesaplama" />
          <RenderButton text="İkizkenar Üçgen Çevre ve Alanı Hesaplama" />
          <RenderButton text="Eşkenar Üçgen Çevre ve Alanı Hesaplama" />
        </View>
      </View >
    );
  }
}
const styles = {
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4
  },

  fixed2: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.3
  },


  textStyles: { fontSize: 30, color: '#fff', padding: 10, borderRadius: 5, fontFamily: 'Slabo17px-Regular', textAlign: 'center' },
  subViewStyles: { backgroundColor: '#800574', flex: 1, justifyContent: 'center', alignItems: 'center' },
  viewStyles: { flex: 1, backgroundColor: '#800574', },
  altViewStyles: { margin: 10, flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', flex: 3 },
}