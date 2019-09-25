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
        <View style={styles.mainContainer}>
         <View style={styles.leftContainer}>
         <Card
        containerStyle= {{
            marginTop:100,
            backgroundColor: '#C81315',
        }}
         image={require('../img/Frutas_Preparadas_Icon.jpg')}>
         <Button
             titleStyle= {{
                color: '#C81315',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             icon={<Icon name='code' color='#F51CB7' />}
             buttonStyle={styles.buttonStyle1}
             title='Frutas Preparadas'
             onPress={() => this.props.navigation.navigate('SubMenu')} />
         </Card>
         <Card
        containerStyle= {{

            backgroundColor: '#C81315',
        }}
        image={require('../img/Frutas_Preparadas_Icon.jpg')}>
         <Button
             titleStyle= {{
                color: '#C81315',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             icon={<Icon name='code' color='#F51CB7' />}
             buttonStyle={styles.buttonStyle1}
             title='Papas'
             onPress={() => this.props.navigation.navigate('SubMenu')} />
         </Card>
         <Card
        containerStyle= {{

            backgroundColor: '#C81315',
        }}
        image={require('../img/Frutas_Preparadas_Icon.jpg')}>
         <Button
             titleStyle= {{
                color: '#C81315',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             icon={<Icon name='code' color='#F51CB7' />}
             buttonStyle={styles.buttonStyle1}
             title='Bebidas'
             onPress={() => this.props.navigation.navigate('SubMenu')} />
         </Card>
         </View>
         <View style={styles.rightContainer}>

         <Card
        containerStyle= {{
            marginTop:100,
            backgroundColor: '#C81315',
        }}
        image={require('../img/Frutas_Preparadas_Icon.jpg')}>
         <Button
             titleStyle= {{
                color: '#C81315',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             icon={<Icon name='code' color='#F51CB7' />}
             buttonStyle={styles.buttonStyle1}
             title='Nieves'
             onPress={() => this.props.navigation.navigate('SubMenu')} />
         </Card>
         <Card
        containerStyle= {{
            backgroundColor: '#C81315',
        }}
        image={require('../img/Frutas_Preparadas_Icon.jpg')}>
         <Button
             titleStyle= {{
                color: '#C81315',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             icon={<Icon name='code' color='#F51CB7'/>}
             buttonStyle={styles.buttonStyle1}
             title='Etcétera'
             onPress={() => this.props.navigation.navigate('SubMenu')} />
         </Card>

         </View>
         </View>
    );
  }
}
export default MainMenu;

