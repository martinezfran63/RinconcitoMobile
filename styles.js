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
    ContainerOne: {
      width: 340,
    },
    MenuItemMainContainer: {
      flex: 1,
      backgroundColor: 'white',
      borderWidth: 5,
      borderColor: 'white',
    },
    HeaderContainer: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: 'pink',
      borderWidth: 5,
      borderColor: 'yellow',
    },
    Title: {
      flex: 1,
      borderWidth: 5,
      borderColor: 'yellow',

    },
    BodyContainer: {
      flex: 1,

      borderWidth: 5,
      borderColor: 'red',
    },
    PriceContainer: {
      flex: 1,
      borderWidth: 5,

      borderColor: 'pink',
 
    },
    ImageContainer: {
      flex: 5,
      flexDirection: 'row',
      borderWidth: 5,
      borderColor: 'blue',
    },
    MenuItem: {
      flex: 2,
      width: 512,
      borderWidth: 0.5,
      borderColor: 'black',
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
    listItem: {
      marginTop: 20,
    },
    buttonStyle1: {
      backgroundColor:'#C81315',
    },
  });
  