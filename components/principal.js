import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function principal({navigation}) {
    return (
        
        
        
        <View style={styles.container}>


        <Text style={styles.nomeapp}>Rock-Paper-Scissors</Text>
        
        

        <TouchableOpacity style={styles.botaoJogar}>
            <Text style={styles.botaoJogarTexto} onPress={()=> navigation.navigate('Game')}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCreditos}>
            <Text style={styles.botaoCreditosTexto} onPress={()=> navigation.navigate('Credits')}>Credits</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCreditos2}>
            <Text style={styles.botaoCreditosTexto} onPress={()=> navigation.navigate('HowToPlay')}>How to play</Text>
        </TouchableOpacity>





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
      flexDirection:'column',
      
    },

    nomeapp:{
        justifyContent:'center',
        alignItems:'center',
        color:'#FF5C58',
        borderColor: '#FF5C58',
        borderWidth: 1,
        borderRadius: 10,
        fontSize:30,
        height: 80,
        width: 300,
        padding: 20,
        
        marginBottom: 100,
        
    },

    botaoJogar:{
        justifyContent:'center',
        position:'absolute',
        borderColor: '#FF5C58',
        backgroundColor: '#FF5C58',
        borderWidth: 1,
        borderRadius:20,
        padding:20,
    },

    botaoJogarTexto:{
        fontSize:50,
        color: '#FFEDD3',
    },

    botaoCreditosTexto:{
        fontSize:20,
        color: '#FFEDD3',
    },

    botaoCreditos:{
        justifyContent:'center',
        borderColor: '#FF5C58',
        backgroundColor: '#FF5C58',
        borderWidth: 1,
        borderRadius:20,
        padding:10,
        width: 100,
        alignItems:'center',
        marginBottom:200,

    },
    descricao:{
        justifyContent:'center',
        alignItems:'center',
        color:'#FF5C58',
        fontSize:20,
        position: 'relative',
        
        
        
        
    },

    botaoCreditos2:{
        justifyContent:'center',
        borderColor: '#FF5C58',
        backgroundColor: '#FF5C58',
        borderWidth: 1,
        borderRadius:20,
        padding:10,
        width: 150,
        alignItems:'center',
        marginBottom:200,
    }
    

});