

import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';

import styles from '../styles.js';

class MenuItem extends React.Component {
  render() {
    const navigation = this.props.navigation;
    const test =  navigation.getParam('menuItem');
    return (
        <View style={styles.container_one}>

<Text h1>{test}</Text>
       <Image
            source={require('../img/Elotes_300x250.png')     }
            style={{ width: 300, height: 250 }}
        />

        </View>
    );
  }
}
export default MenuItem;