import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { requireNativeComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function game(props){

    const [pontos,setPontos] = useState(0);
    const [escrita,setEscrita] = useState('');
    const [player,setPlayer] = useState ('');
    const [oponente,setOponente] = useState ('');
    const run = () => {

        
        let maquinaResultado = Math.floor(Math.random()*3+1);
        let playerResultado = Math.floor(Math.random()*3+1);
        
        if(maquinaResultado==playerResultado && maquinaResultado == 1){
            setEscrita("Empatamos com pedra!");
            setOponente("Oponente jogou Pedra!");
            setPlayer("Você jogou Pedra");
        }else if(maquinaResultado==playerResultado && maquinaResultado == 2){
            setEscrita("Empatamos com papel");
            setOponente("Oponente jogou Papel!");
            setPlayer("Você jogou Papel");
        }else if(maquinaResultado==playerResultado && maquinaResultado == 3){
            setEscrita("Empatamos com tesoura!");
            setOponente("Oponente jogou Tesoura!");
            setPlayer("Você jogou Tesoura");
        }else if(maquinaResultado==1 && playerResultado == 2){
            setEscrita("Você ganhou! Papel é mais forte que Pedra!");
            setOponente("Oponente jogou Pedra!");
            setPlayer("Você jogou Papel");
            setPontos(pontos+1);
        }else if(maquinaResultado==1 && playerResultado==3){
            setEscrita("Eu ganhei! Pedra é mais forte que Tesoura!");
            setOponente("Oponente jogou Pedra!");
            setPlayer("Você jogou Tesoura");
            setPontos(pontos-1);
        }else if(maquinaResultado==2 && playerResultado == 1){
            setEscrita("Eu ganhei! Papel é mais forte que Pedra!");
            setOponente("Oponente jogou Papel!");
            setPlayer("Você jogou Pedra");
            setPontos(pontos-1);
        }else if(maquinaResultado==2&& playerResultado==3){
            setEscrita("Você ganhou! Tesoura é mais forte que Papel!");
            setOponente("Oponente jogou Papel!");
            setPlayer("Você jogou Tesoura");
            setPontos(pontos+1);
        }else if(maquinaResultado==3 && playerResultado ==1){
            setEscrita("Você ganhou! Pedra é mais forte que Tesoura!");
            setOponente("Oponente jogou Tesoura!");
            setPlayer("Você jogou Pedra");
            setPontos(pontos+1);
        }else if(maquinaResultado==3 && playerResultado == 2){
            setEscrita("Eu ganhei! Tesoura é mais forte que papel!");
            setOponente("Oponente jogou Tesoura!");
            setPlayer("Você jogou Papel");
            setPontos(pontos-1);
        }
        setInterval(() =>{
            setEscrita('O tempo acabou!');
            setOponente('');
            setPlayer('');
            setPontos(0) ; 
            return(game); 
            
      
          },120000);
    
    
    }

    return(

        <View style={styles.container}>
            <Text style={styles.textoDecoracao}>{player}</Text>
            <Text style={styles.textoDecoracao}>{oponente}{'\n'}{'\n'}</Text>
            <Text style={styles.textoDecoracao}>{escrita}</Text>
            <Text style={styles.textoDecoracao}>{pontos}</Text>

            <View style={styles.organizacao}>
                <TouchableOpacity style={styles.gameButton} onPress={run}>
                <Text style={styles.gameButtonText}>Shoot</Text>     
                </TouchableOpacity>

            </View>


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

    organizacao:{
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
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



    textoDecoracao:{
        fontSize:20,
        color: 'black',
    }

});