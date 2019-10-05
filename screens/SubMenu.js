import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';
import { ListItem } from 'react-native-elements'
import listaDeFrutasPreparadas from '../data/listaDeFrutasPreparadas.js';
import listaDeEtc from '../data/listaDeEtc.js';
import styles from '../styles.js';

class SubMenu extends React.Component {
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
    rightTitle={item.price}
    rightTitleStyle= {{
      color: 'white',
      fontFamily: 'Helvetica',
      fontSize: 20, 
      }}
    bottomDivider   
    chevron
    onPress={() => this.props.navigation.navigate(this.props.navigation.getParam('menuParam'))}
  />
)
  render() {
    const {navigate} = this.props.navigation;
    return (      
      <View style={styles.mainContainer}>

        <FlatList style={styles.flatList}
        keyExtractor={this.keyExtractor}
        data={listaDeFrutasPreparadas}
        renderItem={this.renderItem}
    />

      </View>
    );
  }
}
export default SubMenu;