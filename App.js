import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import GallerySwiper from "react-native-gallery-swiper";
import { ListItem } from 'react-native-elements'
import listaDeCategorías from './data/listaDeCategorías.js';
import BebidasScreen from './screens/BebidasScreen.js';
import MainMenu from './screens/MainMenu.js';
import Home from './screens/Home.js';

const MainNavigator = createStackNavigator({
  Home: {screen: Home,
    navigationOptions: () => ({
      headerBackTitle: null,
      headerTransparent: true,
    }),
  },
  MainMenu: {screen: MainMenu,
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