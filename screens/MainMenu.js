import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';
import { Card, Image, ListItem, Button, Icon } from 'react-native-elements'
import styles from '../styles.js';

class MainMenu extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
        <View style={styles.mainContainer}>
         <View style={styles.ContainerOne}>
         <Card
        containerStyle= {{
            marginTop:100,
            backgroundColor: 'white'
        }}>
        <Image
            source={require('../img/Frutas_Preparadas_Icon.jpg')     }
            style={{ width: 250, height: 250 }}
        />
         <Button
             titleStyle= {{
                color: 'white',
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
        }}>
        <Image
            source={require('../img/Frutas_Preparadas_Icon.jpg')     }
            style={{ width: 250, height: 250 }}
        />
         <Button
             titleStyle= {{
                color: 'white',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             buttonStyle={styles.buttonStyle1}
             title='Papas'
             onPress={() => this.props.navigation.navigate('SubMenu', { menuParam: 'Papas'}
             )} />
         </Card>
         </View>
         <View style={styles.ContainerOne}>
         <Card
        containerStyle= {{
            marginTop:100,
            backgroundColor: 'white',
        }}>
        <Image
            source={require('../img/Frutas_Preparadas_Icon.jpg')     }
            style={{ width: 250, height: 250 }}
        />
         <Button
             titleStyle= {{
                color: 'white',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             buttonStyle={styles.buttonStyle1}
             title='Bebidas'
             onPress={() => this.props.navigation.navigate('SubMenu', { menuParam: 'Bebidas'}
             )} />
         </Card>
         <Card
        containerStyle= {{
            backgroundColor: 'white',
        }}>
        <Image
            source={require('../img/Frutas_Preparadas_Icon.jpg')     }
            style={{ width: 250, 
            height: 250, 
            
         }}
        />
         <Button
             titleStyle= {{
                color: 'white',
                fontFamily: 'Helvetica',
                fontSize: 30, 
                 }}
             buttonStyle={styles.buttonStyle1}
             title='Nieves'
             onPress={() => this.props.navigation.navigate('SubMenu', { menuParam: 'Nieves'}
             )} />
         </Card>
         </View>
         <View style={styles.ContainerOne}>
         <Card
        containerStyle= {{
            marginTop:100,
            backgroundColor: 'white',
        }}>
        <Image
            source={require('../img/Frutas_Preparadas_Icon.jpg')     }
            style={{ width: 250, height: 250 }}
        />
         <Button
             titleStyle= {{
                color: 'white',
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

