import React, { Component } from 'react';
import { Dimensions, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { dikdortgen } from '../modules';

const { width, height } = Dimensions.get('window');

class Dikdortgen extends Component {
    state = {
        uzunkenar: 0,
        kisakenar: 0,
        sonuc: {
            cevre: '',
            alan: '',

        }
    }


    render() {
        const sonuc = () => {
            const { uzunkenar, kisakenar } = this.state;
            const a = dikdortgen(uzunkenar, kisakenar);
            this.setState({
                alan: a.alan,
                cevre: a.cevre,
            });
        };

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text>Uzun Kenarı Giriniz</Text>
                <TextInput onChangeText={uzunkenar => this.setState({ uzunkenar })} style={styles.textInputStyle} keyboardType='numeric' />
                <Text>Kısa Kenarı Giriniz</Text>
                <TextInput onChangeText={kisakenar => this.setState({ kisakenar })} style={styles.textInputStyle} keyboardType='numeric' />

                <TouchableOpacity onPress={() => sonuc()} style={styles.touchStyle}>
                    <Text style={{ fontSize: 20 }}>HESAPLA</Text>

                </TouchableOpacity>

                <View style={styles.sonucView}>
                    <Text style={{ padding: 5, marginTop: 5, }}>Sonuç Gösteriliyor...</Text>
                    <Text style={{ marginTop: 5, }}>Dikdörtgenin Alanı : {this.state.alan}</Text>
                    <Text style={{ marginTop: 5, }}>Dikdörtgenin Çevresi : {this.state.cevre}</Text>

                </View>

            </View >
        );
    }
}

const styles = {
    textInputStyle: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        width: width * 0.45,
        paddingLeft: 10,
        fontSize: 18,
        borderRadius: 10,
    },

    sonucView: {
        backgroundColor: '#fff',
        height: height * 0.20,
        width: width * 0.45,
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    touchStyle: {
        width: width * 0.25,
        height: height * 0.025,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 20,

    }
};

export default Dikdortgen;
