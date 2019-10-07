import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';
import { ListItem } from 'react-native-elements'
import styles from '../styles.js';

class SubMenu extends React.Component {

keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem style={styles.listItem}
  containerStyle= {{
    backgroundColor: '#C81315',

  }}
    titleStyle= {{
      color: 'white',
      fontFamily: 'Helvetica',
      fontSize: 25, 
      }}
     subtitleStyle= {{
      color: 'white',
      fontFamily: 'Helvetica',
      fontSize: 20, 
      }}
    title={item.name}
    leftAvatar={{
      rounded: true,
      size: "large",
      source: item.icon_url,
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
    onPress={() => this.props.navigation.navigate(this.props.navigation.getParam("menuParam"), { menuItem: item})}
  />
)

  render() {
    const navigation = this.props.navigation;
    const arr = navigation.getParam('menuList', []);
    return (      
      <View style={styles.mainContainer}>
        <FlatList style={styles.flatList}
        keyExtractor={this.keyExtractor}
        data={arr}
        renderItem={this.renderItem}
       />
      </View>
    );
  }
}
export default SubMenu;