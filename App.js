
import React, { Component } from 'react';
import { Dimensions, View, ImageBackground, Text } from 'react-native';
import Buton from './src/buton';
import { Fonts } from './src/utils/Fonts';
const { height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (

      <View style={styles.viewStyles}>
        <ImageBackground style={styles.fixed2} source={require('./src/img/bg3.jpg')} />
        <View style={styles.subViewStyles}>
          <ImageBackground style={styles.fixed} source={require('./src/img/bg3.jpg')} />
          <Text style={styles.textStyles}>Alan Hesaplama Araçları</Text>
        </View>
        <View style={styles.altViewStyles}>
          <Buton butonText="Dikdörtgen Çevre ve Alanı Hesaplama" />
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


  textStyles: { fontSize: 60, color: '#fff', padding: 10, borderRadius: 5, fontFamily: Fonts.Vinchand },
  subViewStyles: { backgroundColor: '#800574', flex: 1, justifyContent: 'center', alignItems: 'center' },
  viewStyles: { flex: 1, backgroundColor: '#800574', },
  altViewStyles: { margin: 10, flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', flex: 3 },
}