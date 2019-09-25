import { StatusBar, Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal, Linking } from 'react-native';

export default StyleSheet.create({
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
    mainContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#C81315',
    },
    leftContainer: {
      backgroundColor: '#C81315',
      width: 400,
    },
    rightContainer: {
      backgroundColor: '#C81315',
      width: 400,
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
    },
    buttonStyle1: {
      borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "white",
    },
  });
  