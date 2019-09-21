import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import GallerySwiper from "react-native-gallery-swiper";

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
      <Image style={styles.logo}source={require('./img/rinconcito_logo.png')} />
      <Button
        title="Iniciar"
        color="#ffffff"
        onPress={() => navigate('Gallery')}
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
        onPress={() => navigate('Home')}
      />
            <Button
        title="Bebidas"
        onPress={() => navigate('Bebidas')}
      />

      </View>
    );
  }
}



class BebidasScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>

<GallerySwiper
            images={[
                { source: require("../rinconcitomobile/img/bananasconcrema.jpg"),
                   width: 1080,
                   height: 1920 },
                { source: require("../rinconcitomobile/img/bananasplit_2.jpg"),
                    width: 1080,
                    height: 1920 },
                { source: require("../rinconcitomobile/img/clamatoreparado.jpg"),
                    width: 1080,
                    height: 1920 },
                { source: require("../rinconcitomobile/img/dorinachos_2.jpg"),
                    width: 1080,
                    height: 1920 },
                    { source: require("../rinconcitomobile/img/bananasconcrema.jpg"),
                    width: 1080,
                    height: 1920 },
                 { source: require("../rinconcitomobile/img/bananasplit_2.jpg"),
                     width: 1080,
                     height: 1920 },
                 { source: require("../rinconcitomobile/img/clamatoreparado.jpg"),
                     width: 1080,
                     height: 1920 },
                 { source: require("../rinconcitomobile/img/dorinachos_2.jpg"),
                     width: 1080,
                     height: 1920 },
            ]}
        />

      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Gallery: {screen: GalleryScreen},
  Bebidas: {screen: BebidasScreen}

});

const App = createAppContainer(MainNavigator);

export default App;