

import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';
import styles from '../styles.js';

class MenuItem extends React.Component {
  render() {
    const br = `\n`;
    const navigation = this.props.navigation;
    const product =  navigation.getParam('menuItem');
    return (
        <View style={styles.mainItemContainer}>

        <Text
        style= {{
          color: 'black',
          fontFamily: 'Helvetica',
          fontWeight: 'bold',
          fontSize: 50,
          marginTop:65,
          textAlign: "left",
          }}>{product.name}
        </Text>

        <Image  
            source={product.icon_url}
            style={{ width: 540, height: 450, }}
        />


        <Text
        style= {{
          color: 'black',
          fontFamily: 'Helvetica',
          fontSize: 45, 
          textAlign: "left",

          }}>{product.price}</Text>


        <Text
        style= {{
          color: 'black',
          fontFamily: 'Helvetica',
          fontSize: 25, 
          }}>Description:{br}{product.description}</Text>

        <Text
        style= {{
          color: 'black',
          fontFamily: 'Helvetica',
          fontSize: 25, 
          }}>Opciones:{br}{product.option}</Text>
        </View>
    );
  }
}
export default MenuItem;