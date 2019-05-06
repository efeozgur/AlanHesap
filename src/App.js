/* eslint-disable global-require */

import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Buton from './buton';


export default class App extends Component {
  render() {
    return (

      <View style={styles.viewStyles}>
        <ImageBackground style={styles.fixed2} source={require('./img/bg3.jpg')} />
        <View style={styles.subViewStyles}>
          <ImageBackground style={styles.fixed} source={require('./img/bg3.jpg')} />
          <Text style={styles.textStyles}>Alan Hesaplama Araçları</Text>
        </View>
        <View style={styles.altViewStyles}>
          <Buton onPress={() => Actions.calc()} butonText="Dikdörtgen Çevre ve Alanı Hesaplama" />
          <Buton butonText="Kare Çevre ve Alanı Hesaplama" />
          <Buton butonText="Dik Üçgen Çevre ve Alanı Hesaplama" />
          <Buton butonText="İkizkenar Üçgen Çevre ve Alanı Hesaplama" />
          <Buton butonText="Eşkenar Üçgen Çevre ve Alanı Hesaplama" />
          <Buton butonText="Çeşitkenar Üçgen Çevre ve Alanı Hesaplama" />
          <Buton butonText="Daire Çevre ve Alanı Hesaplama" />
          <Buton butonText="Yamuk Çevre ve Alanı Hesaplama" />
          <Buton butonText="Elips Çevre ve Alanı Hesaplama" />
          <Buton butonText="Paralelkenar Çevre ve Alanı Hesaplama" />
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


  textStyles: { fontSize: 30, color: '#fff', padding: 10, borderRadius: 5, fontFamily: 'Slabo17px-Regular' },
  subViewStyles: { backgroundColor: '#800574', flex: 1, justifyContent: 'center', alignItems: 'center' },
  viewStyles: { flex: 1, backgroundColor: '#800574', },
  altViewStyles: { margin: 10, flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', flex: 3 },
}