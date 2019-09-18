import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}source={require('./img/rinconcito_logo.png')} />
        <Text style={styles.welcome}>Bienvenidos a El Rinconcito del Sabor!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C81315',
  },
  logo: {
    width: 300,
    height: 300,
  },
  welcome: {
    fontSize: 50,
    color: 'white',
    marginTop: 25,
    
  },
});
