import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import listaDeCategorías from '../data/listaDeCategorías.js';
import styles from '../styles.js';

const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]

   
class MainMenu extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.container}>
        <Card
        containerStyle= {{
             marginTop:80,
             backgroundColor: '#C81315'
        }}
        title='HELLO WORLD'
        image={require('../img/rinconcito_logo.png')}>
        <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
            icon={<Icon name='code' color='#F51CB7' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Frutas Preparadas'
            onPress={() => this.props.navigation.navigate('SubMenu')} />
        </Card>
        <Card
        containerStyle= {{
            backgroundColor: '#C81315'
        }}
         title='HELLO WORLD'
         image={require('../img/rinconcito_logo.png')}>
         <Text style={{marginBottom: 10}}>
             The idea with React Native Elements is more about component structure than actual design.
         </Text>
         <Button
             icon={<Icon name='code' color='#F51CB7' />}
             buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
             title='Frutas Preparadas'
             onPress={() => this.props.navigation.navigate('SubMenu')} />
         </Card>
         </View>
    );
  }
}
export default MainMenu;

