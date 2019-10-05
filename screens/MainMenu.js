import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';
import { Card,ImageBackground, ListItem, Button, Icon } from 'react-native-elements'
import styles from '../styles.js';

class MainMenu extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.mainContainer}>
         <View style={styles.leftContainer}>
         <Card
        containerStyle= {{
            marginTop:120,
            backgroundColor: 'white'
        }}
         image={require('../img/Frutas_Preparadas_Icon.jpg')     }>
         <Button
             titleStyle= {{
                color: 'black',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             buttonStyle={styles.buttonStyle1}
             title='Frutas Preparadas'
             onPress={() => this.props.navigation.navigate('SubMenu', { menuParam: 'Papas'}
             )} />
         </Card>
         <Card
        containerStyle= {{
            backgroundColor: 'white',
        }}
        image={require('../img/Frutas_Preparadas_Icon.jpg')}>
         <Button
             titleStyle= {{
                color: '#C81315',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             buttonStyle={styles.buttonStyle1}
             title='Papas'
             onPress={() => this.props.navigation.navigate('SubMenu', { menuParam: 'Papas'}
             )} />
         </Card>
         <Card
        containerStyle= {{
            backgroundColor: 'white',
        }}
        image={require('../img/Frutas_Preparadas_Icon.jpg')}>
         <Button
             titleStyle= {{
                color: '#C81315',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             buttonStyle={styles.buttonStyle1}
             title='Bebidas'
             onPress={() => this.props.navigation.navigate('SubMenu', { menuParam: 'Bebidas'}
             )} />
         </Card>
         </View>
         <View style={styles.rightContainer}>

         <Card
        containerStyle= {{
            marginTop:120,
            backgroundColor: 'white',
        }}
        image={require('../img/Frutas_Preparadas_Icon.jpg')}>
         <Button
             titleStyle= {{
                color: '#C81315',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             buttonStyle={styles.buttonStyle1}
             title='Nieves'
             onPress={() => this.props.navigation.navigate('SubMenu', { menuParam: 'Nieves'}
             )} />
         </Card>
         <Card
        containerStyle= {{
            backgroundColor: 'white',
        }}
        image={require('../img/Frutas_Preparadas_Icon.jpg')}>
         <Button
             titleStyle= {{
                color: '#C81315',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             buttonStyle={styles.buttonStyle1}
             title='Etcétera'
             onPress={() => this.props.navigation.navigate('SubMenu', { menuParam: 'Etcétera'}
             )} />
         </Card>

         </View>
         </View>
    );
  }
}
export default MainMenu;

