import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';

export default function howto(){
    return(
        <View style={styles.container}>


        <Text style={styles.textoDecoracao}>Jogue uma partida aleatória de {'\n'}Pedra Papel ou Tesoura!</Text>
        <Text style={styles.textoDecoracao}>{'\n'}Para jogar basta clicar no botão SHOOT{'\n'}Que ele jogará automaticamente!</Text>
        



        <StatusBar style="auto" />
    </View>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCD2D1',
      alignItems: 'center',
      justifyContent: 'center',
    },

    textoDecoracao:{
        fontSize:20,
        color: 'black',
    }
});