import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import GallerySwiper from "react-native-gallery-swiper";
import { ListItem } from 'react-native-elements'
import rinconcito_logo from './img/rinconcito_logo.png';
import listaDeCategorías from './listaDeCategorías.js';


const styles = StyleSheet.create({
  container_one: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C81315',
  },
  logo: {
    width: 600,
    height: 600,
  },
  welcome: {
    fontSize: 50,
    color: 'white',
    marginTop: 25,
    
  },
  container: {
    flex: 1,
    
    backgroundColor: '#C81315',
  },
  image: {
    height: 400,
    width: '100%',
    
  },
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: 'absolute',
  },
  flatList: {
    marginTop: 100,
  }
});



class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container_one}>
      <Image style={styles.logo}source={require('../rinconcitomobile/img/rinconcito_logo.png')} />
      <Button
        titleStyle= {{
          color: '#C81315',
          fontFamily: 'Helvetica',
          fontSize: 30, 
           }}
        title="Iniciar"
        type="outline"
        raised="true"
        onPress={() => navigate('Gallery')}
      />
      </View>
    );
  }
}

class GalleryScreen extends React.Component {
keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem
  containerStyle= {{
    backgroundColor: '#C81315',

  }}
    titleStyle= {{
      color: 'white',
      fontFamily: 'Helvetica',
      fontSize: 50, 
      }}
     subtitleStyle= {{
      color: 'white',
      fontFamily: 'Helvetica',
      fontSize: 30, 
      }}
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{
      rounded: false,
      size: "large",
      source: item.avatar_url,
      title: item.name[0]
    }}
    bottomDivider
    chevron
    onPress={() => this.props.navigation.navigate('Bebidas')}
  />
)
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList style={styles.flatList}
      keyExtractor={this.keyExtractor}
      data={listaDeCategorías}
      renderItem={this.renderItem}
    />

      </View>
    );
  }
}



class BebidasScreen extends React.Component {
  render() {
    return (


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

  
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerTransparent: true,
    }),
  },
  Gallery: {screen: GalleryScreen,
    navigationOptions: () => ({
      title: `Seleccionar Menu`,
      headerBackTitle: true,
      headerTransparent: true,
      headerTintColor: 'white',
    }),
  },
  Bebidas: {screen: BebidasScreen,
    navigationOptions: () => ({
      headerTransparent: true,
      headerTintColor: 'white',
    }),
 }
});

const App = createAppContainer(MainNavigator);

export default App;