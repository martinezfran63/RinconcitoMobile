import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Button } from 'react-native';


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

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenidos a El Rinconcito del Sabor!</Text>
      <Image style={styles.logo}source={require('./img/rinconcito_logo.png')} />
      <Button
        title="Iniciar"
        onPress={() => navigate('Gallery', {name: 'Jane'})}
      />
      </View>
    );
  }
}


class GalleryScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>Gallery Page!</Text>

      <Button
        title="Home"
        onPress={() => navigate('Home', {name: 'GalleryScreen'})}
      />
      </View>
    );
  }
}


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Gallery: {screen: GalleryScreen},

});

const App = createAppContainer(MainNavigator);

export default App;