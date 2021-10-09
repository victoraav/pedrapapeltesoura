import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';

export default function credits(){
    return(

        <View style={styles.container}>


            <Text style={styles.textoDecoracao}>Victor Vianna</Text>
            <Text style={styles.textoDecoracao}>0050016379{'\n'}</Text>
            <TouchableOpacity style={styles.gameButton}>
                <Text style={styles.gameButtonText} onPress={ ()=>{ Linking.openURL('https://github.com/victoraav')}}>GitHub</Text>
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
    },

    textoDecoracao:{
        fontSize:20,
        color: 'black',
    },

    gameButton:{
        
        borderColor: '#FF5C58',
        backgroundColor: '#FF5C58',
        borderWidth: 1,
        borderRadius:20,
        padding:20,
 
    },

    gameButtonText:{
        fontSize:25,
        color: '#FFEDD3',
        
    },

    
});